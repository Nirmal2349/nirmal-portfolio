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
        <div id="box-front" class="box">
          <FaJsSquare color="#FFFF00" />
        </div>
        <div id="box-right" class="box">
          <FaCss3Alt color="#F06529" />
        </div>
        <div id="box-back" class="box">
          <FaNode color="#008000" />
        </div>
        <div id="box-left" class="box">
          <FaReact color="#00BFFF" />
        </div>
        <div id="box-top" class="box">
          <FaDatabase color="#D2691E" />
        </div>
        <div id="box-bottom" class="box">
          <FaHtml5 color="#DD0031" />
        </div>
      </div>
    </div>
  );
}
