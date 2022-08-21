import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiHeroku,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/ZYBmbmX/Screenshot-from-2022-06-30-10-24-04.png"
                  alt="Travelocity"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Travelocity Clone</h2>
              <p>
                Cloned the Travelocity.com website. I have Created Routes and
                Built Pages and to develop single-page Applications with Login
                Authentication System using Redux. This project was collaborated
                by team of 5 and completed in just 5 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiHeroku />
              </div>
              <div>
                <a
                  href="https://travelocity-cloned.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Prashant-Bhatiya/Travelocity-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/kHkKptq/Display-Picture.png"
                  alt="Stylecraze"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Stylecraze Clone</h2>
              <p>
                Cloned the Stylecraze.com website. This project was collaborated
                by a team of 5 and completed in just 5 days. I have Created the
                Header and Footer for all Pages & Developed and Merged all the
                pages of the website with Responsiveness.
              </p>
              <div>
                <SiExpress />
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
              </div>
              <div>
                <a
                  href="https://stylecraze-backend-clone.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Prashant-Bhatiya/Stylecraze.backend.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
