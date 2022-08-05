import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import React from "react";

export function Cube() {
  return (
    <div className="wrapper">
      <div className="box-area">
        <div id="box-front" className="box">
          <FaJsSquare color="#FFFF00" />
        </div>
        <div id="box-right" className="box">
          <FaCss3Alt color="#F06529" />
        </div>
        <div id="box-back" className="box">
          <FaNode color="#008000" />
        </div>
        <div id="box-left" className="box">
          <FaReact color="#00BFFF" />
        </div>
        <div id="box-top" className="box">
          <FaDatabase color="#D2691E" />
        </div>
        <div id="box-bottom" className="box">
          <FaHtml5 color="#DD0031" />
        </div>
      </div>
    </div>
  );
}
