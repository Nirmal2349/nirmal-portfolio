import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Cube } from "./Cube";
import CV from "../assets/resume.pdf";
import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Animationrouter } from "./animationrouter";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export function About() {
  return (
    <Animationrouter>
      <Box sx={{ flexGrow: 1 }} className="container__about">
        <Grid container spacing={3}>
          <Grid item xs={12} md={2} lg={4}>
            <div className="about_cubic">
              <Cube />
            </div>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <div className="about_title" style={{ color: "white" }}>
              <h1 className="text__decor">
                Hi, <br></br> I'm <span className="about_color">Nirmal</span>
                <br></br>MERN-Stack Developer
              </h1>
              <Stack spacing={18} direction="row">
                <a href={CV} download className="atag">
                  <Button variant="outlined">Download cv</Button>
                </a>
                <Button aria-label="contact" variant="outlined">
                  <NavLink
                    className="link"
                    to="/Contact"
                    style={{ color: "#1976d2" }}
                  >
                    Contact
                  </NavLink>
                </Button>
              </Stack>

              <br></br>
              <div className="about_social">
                <Button>
                  <a
                    href="https://github.com/Nirmal2349"
                    rel="noreferrer"
                    activeClassName="active"
                    target="_blank"
                  >
                    <GitHubIcon sx={{ fontSize: 40 }} color="primary" />
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://linkedin.com/in/nirmalraj2349"
                    rel="noreferrer"
                    activeClassName="active"
                    target="_blank"
                  >
                    <LinkedInIcon sx={{ fontSize: 40 }} color="primary" />
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://app.netlify.com/teams/nirmal2349/overview"
                    rel="noreferrer"
                    activeClassName="active"
                    target="_blank"
                  >
                    <AccountTreeIcon sx={{ fontSize: 40 }} color="primary" />
                  </a>
                </Button>
                <br></br>
                <br></br>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Animationrouter>
  );
}
