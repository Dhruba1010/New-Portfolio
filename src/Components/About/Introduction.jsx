import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src= "https://i.ibb.co/ctHkbDK/0000001-removebg-preview-Cropped.png"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Prashant Bhatiya </span> from{" "}
                <span className="different"> Ahmedabad, Gujarat</span>. I am in my 4th year of B.Tech in Civil
                 Engineering from
                Apollo Institute of Engineering and Technology, Ahmedabad.
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Swimming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Solving Problems{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Learning Algorithms{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listening to Music{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
