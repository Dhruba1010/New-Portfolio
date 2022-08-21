import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiHeroku,
  SiRedux,
  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
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
                  src="https://i.ibb.co/7yKRCZj/Screenshot-113.png"
                  alt="CricInfo"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>CricInfo Clone</h2>
              <p>
                CricInfo is a website for live scores and news related to cricket all over the world. I have developed the
                Landing and Teams pages with responsiveness. This project was collaborated
                by a team of 5 and completed in just 5 days.
              </p>
              <div>
                <FaReact />
                <SiRedux />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiChakraui />
                <SiHeroku />
              </div>
              <div>
                <a
                  href="https://crickinfo.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Aakash-kushwaha/Honest--wing-5796"
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
                Stylecraze is a global women's platform for
                Fashion, Beauty, and Wellness communities. I have developed the
                Haircare and Makeup pages with responsiveness. This project was collaborated
                by a team of 5 and completed in just 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
                <FaNodeJs />
                <SiExpress />
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
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/tcQjvDq/Screenshot-114.png"
                  alt="Movie App"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Movie Search App</h2>
              <p>
                This is a simple search app for movies with HTML, CSS, and plain JavaScript. It fetches data from OmdbApi based on the input and showed in the DOM.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://mini-movie-app.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dhruba1010/mini-movie-app"
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
