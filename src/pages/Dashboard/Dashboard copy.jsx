import React, { useState } from "react";
import axios from "axios";
import CustomSelect from "components/common/Select/CustomSelect";
import { useSelector } from "react-redux";

function Dashboard() {
  const [inputPairs, setInputPairs] = useState([{ name: "", value: [] }]);
  const [tableData, setTableData] = useState([]);
  const jwtoken = useSelector((state) => state.user.jwtoken);
  const types = useSelector((state) => state.user.types);

  const renderTable = () => {
    if (tableData.length === 0) {
      return <div>No data to display</div>;
    }

    // The first row is the header
    const headers = tableData[0];
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Result</th>
          </tr>
        </thead>
        <tbody style={{ height: "30rem", overflowY: "auto" }}>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                console.log(cell);
                return <td key={cellIndex}>{cell.toString()}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    const newInputPairs = inputPairs.map((inputPair, i) => {
      if (i === index) {
        if (name === "value") {
          // Splitting the string by commas and trimming spaces
          return { ...inputPair, [name]: value.split(",").map((v) => v.trim()) };
        }
        return { ...inputPair, [name]: value };
      }
      return inputPair;
    });
    setInputPairs(newInputPairs);
  };

  const handleAddPair = () => {
    setInputPairs([...inputPairs, { name: "", value: [] }]);
  };

  function groupByName(arr) {
    const grouped = {};

    arr.forEach((item) => {
      if (!grouped[item.name]) {
        grouped[item.name] = [];
      }
      grouped[item.name] = grouped[item.name].concat(
        item.value.map((v) => {
          return v
          // console.log(v)
          // if (v === "TRUE") {
          //   return true;
          // } else if (v === "FALSE") {
          //   return false;
          // }
        })
      );
    });

    return grouped;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const clone = groupByName(inputPairs);

    axios
      .post("http://localhost:3550/generate-truth-table", clone)
      .then((response) => {
        console.log(response.data.table);
        setTableData(response.data.table); // Assuming the data is in `response.data.table`
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <header className="App-header">
      <form onSubmit={handleSubmit}>
        {inputPairs.map((inputPair, index) => (
          <div
            key={index}
            style={{ maxWidth: "40rem", display: "grid", columnGap: "1rem", gridTemplateColumns: "1fr 1fr" }}
          >
            <input
              type="text"
              name="name"
              value={inputPair.name}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Enter name"
            />
            <CustomSelect
              options={types.map((el) => {
                return { value: el.id, label: el.value };
              })}
              onSelect={(e) => {
                handleInputChange(index, { target: { name: "value", value: e.label } });
              }}
              placeholder={inputPair.value.join(", ")} // Joining array elements with a comma
            />
          </div>
        ))}
        <button type="button" onClick={handleAddPair}>
          Add
        </button>
        <button type="submit">Submit</button>
      </form>
      {renderTable()}
    </header>
  );
}

export default Dashboard;
