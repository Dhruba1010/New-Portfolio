import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
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
            href="https://www.linkedin.com/in/prashant-bhatiya"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/Prashant-Bhatiya"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          {/* <a
            href="mailto:gautam.verma095@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          
          </a> */}
          <a
            href="https://twitter.com/Prashant_Coder"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="twitter"/>
          </a>
          {/* <a href="tel:+919927648210" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
            
          </a> */}
        </div>
        <div>
          <div id={`  ${themename} `} className= "mine"><p>Email: webdeveloper.prashant@gmail.com</p></div>
          <div id={`${themename} `} className= "mine1"><p>Phone: +91 95867 84989</p></div>
        </div>
      </div>
    </>
  );
};
