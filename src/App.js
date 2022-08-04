import "./App.scss";
import { Particle } from "./components/Particle";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import {AnimatePresence} from "framer-motion"



function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Particle />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
