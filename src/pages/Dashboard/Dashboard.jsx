import React from "react";
import CustomSelect from "components/common/Select/CustomSelect";
import { useSelector, useDispatch } from "react-redux";
import { create_condition, delete_condition } from "store/condition/condition-actions";

function Dashboard() {
  const jwtoken = useSelector((state) => state.user.jwtoken);
  const types = useSelector((state) => state.user.types);
  const projects = useSelector((state) => state.user.projects);

  const [selectedProject, setSelectedProject] = React.useState(null);
  const [newConditionKey, setNewConditionKey] = React.useState("");
  const [newConditionValue, setNewConditionValue] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (selectedProject) {
      const updatedSelectedProject = projects.find((project) => project.id == selectedProject.id);
      if (updatedSelectedProject) {
        setSelectedProject(updatedSelectedProject);
      }
    }
  }, [projects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedProject);
    dispatch(create_condition(jwtoken, selectedProject?.id, newConditionKey, newConditionValue.label));
  };

  const deleteCondition = (conditionToDeleteId) => {
    dispatch(delete_condition(jwtoken, conditionToDeleteId));
  };

  return (
    <header className="App-header">
      <CustomSelect
        options={projects.map((el) => {
          return { value: el.id, label: el.name };
        })}
        onSelect={(option) => {
          console.log(projects);
          setSelectedProject(projects.find((project) => project.id == option.value));
        }}
        value={selectedProject?.id}
      />

      {selectedProject?.conditions?.map((el) => {
        return (
          <div onClick={() => deleteCondition(el.id)}>
            {el.key} :: {el.value}
          </div>
        );
      })}

      <div style={{ maxWidth: "40rem", display: "grid", columnGap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
        <input
          type="text"
          value={newConditionKey}
          onChange={(e) => setNewConditionKey(e.target.value)}
          placeholder="Enter name"
        />
        <CustomSelect
          options={types.map((el) => {
            return { value: el.id, label: el.value };
          })}
          onSelect={(option) => {
            setNewConditionValue(option);
          }}
          value={newConditionValue.value}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </header>
  );
}

export default Dashboard;
