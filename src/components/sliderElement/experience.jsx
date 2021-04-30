import React from "react";

const experience = ({ exeData }) => {
  return (
    <div className="page-wrapper">
      {exeData.map((exp, index) => {
        return (
          <div key={index}>
            <img src={exp.image} alt={exp.alt} />
            <h1>{exp.position}</h1>
            <h2>{exp.companyName}</h2>
            <h3>
              Duration: {exp.startDate} {exp.endDate}
            </h3>
            <h4>Tech Used: {exp.techUsed}</h4>
            <p>{exp.learning}</p>
          </div>
        );
      })}
    </div>
  );
};

export default experience;
