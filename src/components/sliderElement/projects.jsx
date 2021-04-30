import React from "react";

const projects = ({ projectData }) => {
  return (
    <div className="page-wrapper">
      {projectData.map((project, index) => {
        return (
          <div>
            <img src={project.image} alt={project.alt} />
            <h1>{project.name}</h1>
            <p>{project.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default projects;
