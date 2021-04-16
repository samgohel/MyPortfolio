import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <header>
        <a href="#" className="header logo">
          Shambhu Gohel
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Download CV</a>
          </li>
        </ul>
      </header>
      <section className="banner"></section>
    </>
  );
};

export default navbar;
