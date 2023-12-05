import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_project, delete_project } from "store/project/project-actions";
import { create_type, delete_type } from "store/type/type-actions";

function Projects() {
  const [newProject, setNewProject] = React.useState("");
  const jwtoken = useSelector((state) => state.user.jwtoken);
  const projects = useSelector((state) => state.user.projects);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create_project(jwtoken, newProject));
  };

  const deleteType = (e, typeId) => {
    e.preventDefault();
    dispatch(delete_project(jwtoken, typeId));
  };

  return (
    <header className="App-header">
      <div>
        {projects.map((type) => (
          <p onClick={(e) => deleteType(e, type.id)}>{type.name}</p>
        ))}
      </div>

      <input
        type="text"
        name="name"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Enter name"
      />

      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </header>
  );
}

export default Projects;
