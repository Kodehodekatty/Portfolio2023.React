import React, { useState, useRef, useEffect } from "react";

import codeGraphicImg from "../images/VSC/image16.png";
import styles from "../components/BackgroundStyles.module.css";
import facecode from "../images/VSC/faceCODE.png";
import bodycode from "../images/VSC/onlybody.png";
import bodyandface from "../images/VSC/faceandbodyCODE.png";
import footercode from "../images/VSC/footer.png";
import entirebody from "../images/VSC/entirebody.png";
import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";

export default function Background({
  // the coding background and the different coding images connected to the image of me with the buttons

  partShowing,
  inSequence,
}) {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    // <div className={styles.test}>
    <div className={styles.backgroundContainer}>
      {partShowing == "none" && (
        <img src={codeGraphicImg} className={styles.codebackground} />
      )}
      {partShowing == "face" && (
        <>
          <div className={styles.both}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
          <img src={facecode} className={styles.codebackground} />
        </>
      )}{" "}
      {partShowing == "body" && (
        <>
          <div className={styles.both}>
            {inSequence && <FaceNav setTextSelector={setTextSelector} />}
            <AboutMe textSelector={textSelector} />
          </div>
          <img
            src={inSequence ? bodyandface : bodycode}
            className={styles.codebackground}
          />
        </>
      )}{" "}
      {partShowing == "footer" && (
        <>
          <div className={styles.both}>
            {inSequence && <FaceNav setTextSelector={setTextSelector} />}
            {inSequence && <AboutMe textSelector={textSelector} />}
          </div>
          <img
            src={inSequence ? entirebody : footercode}
            className={styles.codebackground}
          />
        </>
      )}{" "}
      <Navbar />
    </div>
  );
}
