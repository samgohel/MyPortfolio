import React from "react";
import LeftMenu from "./components/leftMenu/leftMenu";
import RightMenu from "./components/rightMenu/rightMenu";

const home = () => {
  return (
    <>
      <div className="row">
        <div className="col-8 no-gutters">
          <LeftMenu />
        </div>

        <div className="col-4 no-gutters">
          <RightMenu />
        </div>
      </div>
    </>
  );
};

export default home;
