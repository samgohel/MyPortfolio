import React from "react";
import "./rightMenu.css";
import { BiAlignRight } from "react-icons/bi";

const rightMenu = () => {
  return (
    <>
      <div className="menu mt-4">
        <ul>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Hire Me</a>
          </li>
          <li>
            <a href="#">
              <BiAlignRight />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default rightMenu;
