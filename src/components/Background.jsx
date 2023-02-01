import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";

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
    <div className={styles.backgroundContainer}>
      <Navbar />
      {partShowing == "none" && <div className={styles.codebackground}> </div>}
      {partShowing == "face" && (
        <>
          <div className={styles.facecodebackgrounddiv}>
            <div className={styles.both}>
              <FaceNav setTextSelector={setTextSelector} />
            </div>
          </div>
        </>
      )}{" "}
      {partShowing == "body" && (
        <>
          <div
            className={
              inSequence
                ? styles.faceandbodybackgrounddiv
                : styles.bodybackgrounddiv
            }
          >
            <div className={styles.both}>
              {inSequence && <FaceNav setTextSelector={setTextSelector} />}
              <AboutMe textSelector={textSelector} />
            </div>
          </div>
        </>
      )}{" "}
      {partShowing == "footer" && (
        <>
          <div
            className={
              inSequence
                ? styles.entirebodybackgrounddiv
                : styles.footerbackgrounddiv
            }
          >
            <div className={styles.both}>
              {inSequence && <FaceNav setTextSelector={setTextSelector} />}
              {inSequence && <AboutMe textSelector={textSelector} />}
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
}
