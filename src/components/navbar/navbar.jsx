import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiAlignRight } from "react-icons/bi";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../../data/menuData";

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(BiAlignRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    color: #fff;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const navbar = () => {
  return (
    <nav className="navbar">
      <Logo to="/">Shambhu Gohel</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <button to="/resume" className="nav-btn">
          Resume
        </button>
      </NavBtn>
    </nav>
  );
};

export default navbar;
