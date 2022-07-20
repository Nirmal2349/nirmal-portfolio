import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Cube } from "./Cube";
import { Link } from "react-router-dom";
import CV from "../assets/resume.pdf";
export function About() {
  return (
    <div className="about_data">
      <div className="about_title">
        <h1>
          Hi, <br></br> I'm <span className="about_color">S Nirmal</span>
          <br></br>Full-Stack Developer
        </h1>
        <Stack spacing={8} direction="row">
          <a href={CV} download className="atag">
            <Button variant="outlined" style={{ color: "white" }}>
              Download cv
            </Button>
          </a>
          <Button
            aria-label="contact"
            variant="outlined"
            style={{ color: "lightgrey" }}
          >
            <Link to="/Contact">Contact</Link>
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
            <GitHubIcon style={{ color: "white" }} />
          </a>
          <a
            href="https://linkedin.com/in/nirmalraj2349"
            rel="noreferrer"
            activeClassName="active"
            target="_blank"
          >
            <LinkedInIcon style={{ color: "white" }} />
          </a>
          <a
            href="https://twitter.com/nirmalraj35"
            rel="noreferrer"
            activeClassName="active"
            target="_blank"
          >
            <TwitterIcon style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <Cube />
      <div>haii hello</div>
    </div>
  );
}
