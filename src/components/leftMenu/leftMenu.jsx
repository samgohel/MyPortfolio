import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import "./leftMenu.css";

const leftMenu = () => {
  return (
    <>
      <div className="row">
        <div className="col-6 mt-4">
          <a href="" className="social logo">
            Shambhu Gohel
          </a>
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
      <div className="row">
        <div className="col-12">hey</div>
      </div>
    </>
  );
};

export default leftMenu;
