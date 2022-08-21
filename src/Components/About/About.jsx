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
          Hi, I am <span className="about__name">Dhruba Singha</span>
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
            href="https://github.com/Dhruba1010"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:dhrubasingha096p@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919002999506"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruba-singha"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1DrEz1cjXgIPZiTPR7Drs4MlgUun4RE6T/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.google.com/maps/place/Jajigram,+West+Bengal+731221/@24.4793335,87.9480052,15z/data=!4m13!1m7!3m6!1s0x39fa38e965647c2b:0xcc8176f0a09daca2!2sJajigram,+West+Bengal+731221!3b1!8m2!3d24.4793335!4d87.9567599!3m4!1s0x39fa38e965647c2b:0xcc8176f0a09daca2!8m2!3d24.4793335!4d87.9567599"
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
