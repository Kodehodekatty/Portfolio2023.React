import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";

import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";
import MenuStyles from "../components/MenuStyles.module.css";

export default function Background({ showHeader, showBody, showFooter }) {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    <div className={styles.whatever}>
      {showHeader && !showBody && !showFooter && (
        <div className={styles.facecodebackgrounddiv}>
          <FaceNav setTextSelector={setTextSelector} />{" "}
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {showHeader && showBody && !showFooter && (
        <div className={styles.faceandbodybackgrounddiv}>
          <FaceNav setTextSelector={setTextSelector} />
          <AboutMe textSelector={textSelector} />
        </div>
      )}

      {!showHeader && showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.bodyandfooterbackgrounddiv}>
            <AboutMe textSelector={textSelector} />
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {!showHeader && showBody && !showFooter && (
        <div className={styles.bodybackgrounddiv}>
          <div className={styles.socialmediabar}>
            <Navbar /> <AboutMe textSelector={textSelector} />
          </div>
        </div>
      )}
      {!showHeader && !showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.footerbackgrounddiv}>
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
      {showHeader && !showBody && showFooter && (
        <div className={styles.faceandfooter}>
          <FaceNav setTextSelector={setTextSelector} />

          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}

      {showHeader && showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.entirebodybackgrounddiv}>
            <div className={styles.socialmediabar}>
              <Navbar />
            </div>
            <FaceNav setTextSelector={setTextSelector} />
            <AboutMe textSelector={textSelector} />{" "}
          </div>
        </div>
      )}
      {!showHeader && !showBody && !showFooter && (
        <div className={styles.whatever}>
          <div className={styles.codebackground}>
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
