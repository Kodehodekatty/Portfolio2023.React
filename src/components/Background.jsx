import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";

import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";

export default function Background({ showHeader, showBody, showFooter }) {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    <div>
      {showHeader && !showBody && !showFooter && (
        <div>
          <div className={styles.facecodebackgrounddiv}>
            <FaceNav setTextSelector={setTextSelector} />{" "}
            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {showHeader && showBody && !showFooter && (
        <div>
          <div className={styles.faceandbodybackgrounddiv}>
            <FaceNav setTextSelector={setTextSelector} />
            <AboutMe textSelector={textSelector} />

            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {!showHeader && showBody && showFooter && (
        <div>
          <div className={styles.bodyandfooterbackgrounddiv}>
            <AboutMe textSelector={textSelector} />

            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {!showHeader && showBody && !showFooter && (
        <div className={styles.bodybackgrounddiv}>
          <AboutMe textSelector={textSelector} />

          <div className={styles.backgroundContainer}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {!showHeader && !showBody && showFooter && (
        <div className={styles.footerbackgrounddiv}>
          <div className={styles.backgroundContainer}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {showHeader && !showBody && showFooter && (
        <div>
          <div className={styles.faceandfooter}>
            <FaceNav setTextSelector={setTextSelector} />

            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {showHeader && showBody && showFooter && (
        <div>
          <div className={styles.entirebodybackgrounddiv}>
            <FaceNav setTextSelector={setTextSelector} />
            <AboutMe textSelector={textSelector} />{" "}
            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {!showHeader && !showBody && !showFooter && (
        <div>
          <div className={styles.codebackground}>
            <div className={styles.backgroundContainer}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}

      {/* {showHeader && (
        <div className={styles.facecodebackgrounddiv}>
          <Navbar />{" "}
          <div className={styles.both}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
        </div>
      )}{" "}
      {showBody && (
        <div
          className={
            inSequence
              ? styles.faceandbodybackgrounddiv
              : styles.bodybackgrounddiv
          }
        >
          {" "}
          <Navbar />{" "}
          <div className={styles.both}>
            {inSequence && <FaceNav setTextSelector={setTextSelector} />}
            <AboutMe textSelector={textSelector} />
          </div>
        </div>
      )}{" "}
      {showFooter && (
        <div
          className={
            inSequence
              ? styles.entirebodybackgrounddiv
              : styles.footerbackgrounddiv
          }
        >
          {" "}
          <Navbar />{" "}
          <div className={styles.both}>
            {inSequence && <FaceNav setTextSelector={setTextSelector} />}
            {inSequence && <AboutMe textSelector={textSelector} />}
          </div>
        </div>
      )}{" "} */}
    </div>
  );
}
