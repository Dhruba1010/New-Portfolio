import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Contact = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={`${themename} section`}>
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactcontainer" data-aos="fade-right">
          <a
            href="https://www.linkedin.com/in/dhruba-singha"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Dhruba1010"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href="https://twitter.com/DhrubaSinha"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter"/>
          </a>
        </div>
        <div>
          <div id={`  ${themename} `} className= "mine"><p>Email: dhrubasinha096p@gmail.com</p></div>
          <div id={`${themename} `} className= "mine1"><p>Phone: +91 90029 99506</p></div>
        </div>
      </div>
    </>
  );
};
