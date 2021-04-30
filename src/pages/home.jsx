import React from "react";
import "./home.css";
import LeftMenu from "../components/leftMenu/leftMenu";
import RightMenu from "../components/rightMenu/rightMenu";

const home = () => {
  return (
    <div className="home">
      <div className="row no-gutters">
        <div className="col-8 left">
          <LeftMenu />
        </div>

        <div className="col-4 right">
          <RightMenu />
        </div>
      </div>
    </div>
  );
};

export default home;
