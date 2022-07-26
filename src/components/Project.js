import React from "react";
import { Exp } from "./experience";
import IMG00 from "../assets/bags.JPG";
import IMG01 from "../assets/login.JPG";
import IMG1 from "../assets/movie.jpg";
import IMG2 from "../assets/color.jpg";
import IMG3 from "../assets/tictactoe.jpg";
import IMG4 from "../assets/bday.jpg";
import Button from "@mui/material/Button";
import { Animationrouter } from "./animationrouter";



const data = [
  {
    id: 1,
    image: IMG00,
    title: "Shopping-Bags",
    github: "https://github.com/Nirmal2349/mern-bags",
    demo: "https://mern-bag.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG01,
    title: "Login-App",
    github: "https://github.com/Nirmal2349/login-authentication",
    demo: "https://login-app.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Movie-App",
    github: "https://github.com/Nirmal2349/react-app",
    demo: "https://movie-app-tictactoe.netlify.app",
  },
  {
    id: 4,
    image: IMG2,
    title: "Color-Game",
    github: "https://github.com/Nirmal2349/react-app",
    demo: "https://movie-app-tictactoe.netlify.app",
  },
  {
    id: 5,
    image: IMG3,
    title: "Tic-Tac-Toe",
    github: "https://github.com/Nirmal2349/react-app",
    demo: "https://movie-app-tictactoe.netlify.app",
  },
  {
    id: 6,
    image: IMG4,
    title: "Birthday calculator",
    github: "https://github.com/Nirmal2349/dom-birthday-calc-2",
    demo: "https://loving-goldstine-3a6a1b.netlify.app/",
  },
];

export function Project() {
  return (
    <Animationrouter>
      <div>
        <br></br>
        <br></br>
        <Exp />

        <section id="portfolio">
          <div className="project_head">
            <h2>Sample-Project</h2>
          </div>
          <div className="container portfolio__container">
            {data.map((item) => (
              <article className="portfolio__item" key={item.id}>
                <div className="portfolio__item-img">
                  <img src={item.image} alt={`portfolio${item.id}`} />
                </div>
                <h3 style={{ textAlign: "center", color: "white" }}>
                  {item.title}
                </h3>
                <div className="portfolio__item-cta">
                  <a
                    href={item.github}
                    className="atag"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined">Github</Button>
                  </a>

                  <a
                    href={item.demo}
                    className="atag"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined">Live Demo</Button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Animationrouter>
  );
  }

