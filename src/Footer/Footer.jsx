import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
      <footer
        className={props.isDarkMode ? styles.DarkFooter : styles.FooterCont}
      >
        <img src="./Group 137.png" alt="js" />
        <img src="./Group 138.png" alt="react" />
        <img src="./Group 139.png" alt="Angular" />
        <img src="./Group 140.png" alt="Vue" />
      </footer>
    </>
  );
};

export default Footer;
