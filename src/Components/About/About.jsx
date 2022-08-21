import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Prashant Bhatiya</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          An inquisitive and highly motivated full stack web developer with
          specialisation in MERN stack. Have relevant hands-on experience in
          building multiple websites from scratch. Seeking to pursue a career in
          a challenging environment to hone industry skill.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Prashant-Bhatiya"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:webdeveloper.prashant@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919586784989"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-bhatiya"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1QwwtGv3dE9KGv2_ZMFyN74H9tSA54MaT/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          {/* <a
            href="https://www.facebook.com/gautam.verma.714655"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a> */}
          <a
            href="https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0202434,72.5797426,11z/data=!3m1!4b1!4m5!3m4!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
