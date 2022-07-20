import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { About } from "./About";
import { Project } from "./Project";
import { Contact } from "./Contact";

export function Navbar() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Router>
          <Button
            aria-label="about"
            variant="outlined"
            size="large"
            smooth={true}
            duration={500}
            style={{ color: "lightgrey" }}
          >
            <Link to="/">
              <HomeIcon />
            </Link>
          </Button>

          <Button
            aria-label="project"
            variant="outlined"
            size="large"
            smooth={true}
            duration={500}
            style={{ color: "lightgrey" }}
          >
            <Link to="/Project">
              <WorkspacePremiumIcon />
            </Link>
          </Button>

          <Button
            aria-label="contact"
            variant="outlined"
            size="large"
            smooth={true}
            duration={500}
            style={{ color: "lightgrey" }}
          >
            <Link to="/Contact">
              <ContactMailIcon />
            </Link>
          </Button>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </Stack>
    </div>
  );
}
