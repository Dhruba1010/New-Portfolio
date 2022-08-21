import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className = {` ${themename} section `}>
        <a
          href="https://github.com/Dhruba1010"
          rel="noreferrer"
          target="_blank"
        >
          <h3  className = {` ${themename} footer`}>Made By Dhruba Singha</h3>
        </a>
      </div>
    </>
  );
};
