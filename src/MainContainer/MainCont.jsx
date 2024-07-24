import React from "react";
import styles from "./Main.module.css";
const MainCont = (props) => {
  return (
    <>
      <section
        className={
          props.isDarkMode ? styles.mainContainer : styles.lightContainer
        }
      >
        <div>
          <div
            className={props.isDarkMode ? styles.lightEdit : styles.textEdit}
          >
            <p>Hi, I am </p>
            <p>Chukwukwe Chisom</p>
          </div>
          <p className={styles.justP}>Frontend Developer</p>
          <button className={styles.button}>Download CV</button>
          <ul>
            <img
              className={styles.Twitter}
              src="./white_background.svg"
              alt="twitter logo"
            />
            <img
              className={styles.WhatsApp}
              src="./WhatsApp Inc. - png 0.svg "
              alt="whatsApp logo"
            />
            <img
              className={styles.facebook}
              src="./g12.svg"
              alt="facebook logo"
            />
            <img
              className={styles.Instargram}
              src="./instargram.com - png.svg"
              alt=" insta logo"
            />
            <img
              className={styles.InLogo}
              src="./Path 2520.svg"
              alt="IN logo"
            />
          </ul>
        </div>
        <img
          className={styles.image}
          src="./Group 148.png"
          alt="young fella waving"
        />
      </section>
    </>
  );
};

export default MainCont;
