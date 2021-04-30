import React from "react";

const techStack = ({ techStackData }) => {
  return (
    <div className="page-wrapper">
      {techStackData.map((techStack, index) => {
        return (
          <div key={index}>
            <img src={techStack.image} alt={techStack.alt} />
            <h1>{techStack.title}</h1>
            <p>{techStack.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default techStack;
