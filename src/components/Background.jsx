import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";

import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";

import Footer from "../Pages/Footer";

export default function Background({ showHeader, showBody, showFooter }) {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    <div className={styles.wrapping}>
      <svg
        width="1975"
        height="1202"
        viewBox="0 0 1975 1202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      {showHeader && !showBody && !showFooter && (
        <div className={styles.whatever}>
          <div className={styles.headerwrapper}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />
          </div>
        </div>
      )}
      {showHeader && showBody && !showFooter && (
        <div className={styles.whatever}>
          <div className={styles.headerwrapper}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
          <div className={styles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} />{" "}
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />
          </div>
        </div>
      )}
      {!showHeader && showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
          <div className={styles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {!showHeader && showBody && !showFooter && (
        <div className={styles.whatever}>
          <div className={styles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} />
          </div>

          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {!showHeader && !showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.footerbox}>
            <Footer />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {showHeader && !showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.headerwrapper}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />
          </div>
          <div className={styles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {showHeader && showBody && showFooter && (
        <div className={styles.whatever}>
          <div className={styles.headerwrapper}>
            <FaceNav setTextSelector={setTextSelector} />
          </div>
          <div className={styles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} />{" "}
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />
          </div>
          <div className={styles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {!showHeader && !showBody && !showFooter && (
        <div className={styles.whatever}>
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
    </div>
  );
}
