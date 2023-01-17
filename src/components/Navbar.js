import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="left-head">
        <img src={logo} className="react-logo" />
        <h3>ReactFacts</h3>
      </div>

      <h4>React - Project 1</h4>
    </div>
  );
}

export default Navbar;
//ReactDOM.createRoot(document.getElementById("root")).render(<Navbar />);
