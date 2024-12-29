import React from "react";
import "./Landing.css";
import todoImage from "../../Images/Reactangle.png";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate= useNavigate();
  return (
    <div className="main_container">
      {/* Left Section */}
      <div className="left">
        <img src={todoImage} alt="ToDo" className="Todoimage" />
      </div>

      {/* Right Section */}
      <div className="right">
        <div className="sub_right">
          <h1>ToDO Py</h1>
          <div className="Text">
            <p>Stay Organized, Get Things Done: Your
              Ultimate To-Do List App.</p>
            <p>A todo list app is a digital task management
              tool designed to help users organize and
              prioritize their daily activities and
              responsibilities.</p>
          </div>


          <div className="getStart" onClick={() => navigate("./LoginPage")}>
            <p>Get Started</p>
          </div>

          <p>Already have account? <span onClick={() => navigate("./LoginPage")}>Sign In</span></p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
