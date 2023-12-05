import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_type, delete_type } from "store/type/type-actions";

function Types() {
  const [newType, setNewType] = React.useState("");
  const jwtoken = useSelector((state) => state.user.jwtoken);
  const types = useSelector((state) => state.user.types);

  React.useEffect(() => {
    console.log(types);
  }, [types]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_type(jwtoken, newType));
  };

  const deleteType = (e, typeId) => {
    e.preventDefault();
    dispatch(delete_type(jwtoken, typeId));
  };

  return (
    <header className="App-header">
      <div>
        {types.map((type) => (
          <p onClick={(e) => deleteType(e, type.id)}>{type.value}</p>
        ))}
      </div>

      <input
        type="text"
        name="name"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="Enter name"
      />

      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </header>
  );
}

export default Types;
