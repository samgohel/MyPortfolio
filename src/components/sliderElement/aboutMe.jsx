import React from "react";
import "./sliderElement.css";
import styled, { css } from "styled-components/macro";

const AboutImage = styled.img`
  position: relative;
  justify-content: left;
  align-items: left;
  text-align: center;
  width: 100%;
  height: 80vh;
  object-fit: cover;
  z-index: 1;
`;

const aboutMe = ({ aboutMeData }) => {
  return (
    <div className="page-wrapper">
      {aboutMeData.map((aboutMe, index) => {
        return (
          <div key={index}>
            <AboutImage src={aboutMe.image} alt={aboutMe.alt} />
            <h1>{aboutMe.title}</h1>
            <p>{aboutMe.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default aboutMe;
