import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import sun from "/Vector.svg";
import moon from "/moonlogo.svg";
const Header = (props) => {
  return (
    <>
      <header className={props.isDarkMode ? styles.darkMode : styles.lightMode}>
        <div className={styles.Container}>
          <ul
            className={
              props.isDarkMode ? styles.header : styles.lightHeaderEdit
            }
          >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Content</li>
          </ul>
          <button onClick={props.toggleMode}>
            <img className="" src={props.isDarkMode ? sun : moon} alt="icon" />
          </button>
        </div>
      </header>
      <div
        className={props.isDarkMode ? styles.underLine : styles.lightUnderLine}
      ></div>
    </>
  );
};

export default Header;
