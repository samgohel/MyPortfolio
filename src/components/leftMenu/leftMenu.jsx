import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./leftMenu.css";
import styled, { css } from "styled-components/macro";

import {
  aboutMe,
  experience,
  projects,
  techStack,
} from "../../data/sliderdata";
import AboutMe from "../sliderElement/aboutMe";
import MySkills from "../sliderElement/mySkills";
import TechStack from "../sliderElement/techStack";
import Projects from "../sliderElement/projects";
import Experience from "../sliderElement/experience";

const SliderSection = styled.section`
  height: 95vh;
  max-height: 1100px;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  top: 5rem;
  left: 0;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeoroImage = styled.img`
  position: absolute;
  // top: 0;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
  top: 5rem;
  left: 0;
  width: 60%;
  height: 100%;
  object-fit: cover;
`;

const leftMenu = () => {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-6 mt-4">
          <span>
            <a href="" className="social logo">
              Shambhu Gohel
            </a>
          </span>
        </div>

        <div className="col-6 mt-4 social">
          <ul>
            <li>
              <a href="#">
                <FaGithubSquare /> Github
              </a>
            </li>
            <li>
              <a href="#">
                <RiLinkedinBoxFill />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillTwitterSquare />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <SliderSection>
        <div className="row no-gutters">
          <div className="col-6">
            <AboutMe aboutMeData={aboutMe} />
            <MySkills />
            <TechStack techStackData={techStack} />
            <Experience exeData={experience} />
            <Projects projectData={projects} />
          </div>
        </div>
      </SliderSection>
    </>
  );
};

export default leftMenu;
