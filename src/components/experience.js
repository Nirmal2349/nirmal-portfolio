import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Animationrouter } from "./animationrouter";


export function Exp() {
  return (
    <Animationrouter>
      <div id="experience">
        <h3
          style={{
            textAlign: "center",
            color: "rgb(12 134 145)",
            fontFamily:
              " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            fontSize: "30px",
          }}
        >
          Skills
        </h3>

        <div className="container experience__container">
          <div className="experience__fe">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MUI</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstraps</h4>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__be">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node JS</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MongoDB</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>ExpressJS</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>
                    AWS
                    <small> Basic</small>
                  </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Animationrouter>
  );
}
