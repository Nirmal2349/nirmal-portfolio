import "./App.scss";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import HomeIcon from "@mui/icons-material/Home";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import { About } from "./components/About";
import { Particle } from "./components/Particle";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Particle />
      <div className="header">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
