import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Cube } from "./Cube";
import CV from "../assets/resume.pdf";
import React from "react";
import { NavLink } from "react-router-dom";

export function About() {
  return (
    <div className="about_data">
      <div className="about_title">
        <div>
          <h1>
            Hi, <br></br> I'm <span className="about_color">S Nirmal</span>
            <br></br>Full-Stack Developer
          </h1>
          <Stack spacing={8} direction="row">
            <a href={CV} download className="atag">
              <Button variant="outlined">Download cv</Button>
            </a>
            <Button
              aria-label="contact"
              variant="outlined"
              style={{ color: "lightgrey" }}
            >
              <NavLink className="link" to="/Contact">
                Contact
              </NavLink>
            </Button>
          </Stack>

          <br></br>
          <div className="about_social">
            <a
              href="https://github.com/Nirmal2349"
              rel="noreferrer"
              activeClassName="active"
              target="_blank"
            >
              <GitHubIcon style={{ color: "Maximum blue green" }} />
            </a>
            <a
              href="https://linkedin.com/in/nirmalraj2349"
              rel="noreferrer"
              activeClassName="active"
              target="_blank"
            >
              <LinkedInIcon style={{ color: "Maximum blue green" }} />
            </a>
            <a
              href="https://twitter.com/nirmalraj35"
              rel="noreferrer"
              activeClassName="active"
              target="_blank"
            >
              <TwitterIcon style={{ color: "Maximum blue green" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="about_cubic">
        <Cube />
      </div>
    </div>
  );
}
