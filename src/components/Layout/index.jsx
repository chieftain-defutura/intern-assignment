import React from "react";
import Task from "../../components/Assigntasks";
import App from "../../App";
import Homeheader from "../../components/Header/Homeheader";
import Assigntasks from "../../components/Assigntasks/assigntasks";
import "./Layout.css";

const Homepage = ({ children }) => {
  return (
    <div className="layout_container">
      <div className="layout_heading">
        <Homeheader />
      </div>
      <div className="layout_main">
        <Assigntasks />
        {children}
      </div>
    </div>
  );
};
export default Homepage;