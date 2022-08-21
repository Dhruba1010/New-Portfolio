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
                src= "https://i.ibb.co/Fz0SMQt/new-photo-new.jpg"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Dhruba Singha </span> from{" "}
                <span className="different"> Jajigram, Birbhum, West Bengal</span>.  I have completed my graduation in 2020 in the Electrical Engineering department from Narula Institute of Technology, Kolkata.
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gamming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Listening Rock Musics{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Chess{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Sports{" "}
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
