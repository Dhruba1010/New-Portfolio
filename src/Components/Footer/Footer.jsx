import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  return (
    <>
      <div className = {` ${themename} section `}>
        <a
          href="https://github.com/Prashant-Bhatiya"
          rel="noreferrer"
          target="_blank"
        >
          <h3  className = {` ${themename} footer`}>Made By Prashant Bhatiya</h3>
        </a>
      </div>
    </>
  );
};
