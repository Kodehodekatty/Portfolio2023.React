import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";
import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";
import Footer from "../Pages/Footer";

export default function Background({
  showHeader,
  showBody,
  showFooter,
  onNavigated,
}) {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    <>
      {showHeader && !showBody && !showFooter && (
        <div className={styles.maincodingbackground}>
          <div className={styles.headerwrapper}>
            <FaceNav
              setTextSelector={(text) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />
          </div>
        </div>
      )}
      {showHeader && showBody && !showFooter && (
        <div className={styles.maincodingbackground}>
          <div className={styles.headerwrapper}>
            <FaceNav
              setTextSelector={(text) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
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
        <div className={styles.maincodingbackground}>
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
        <div className={styles.maincodingbackground}>
          <div className={styles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} />
          </div>

          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {!showHeader && !showBody && showFooter && (
        <div className={styles.maincodingbackground}>
          <div className={styles.footerbox}>
            <Footer />
          </div>
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
      {showHeader && !showBody && showFooter && (
        <div className={styles.maincodingbackground}>
          <div className={styles.headerwrapper}>
            <FaceNav
              setTextSelector={(text) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
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
        <div className={styles.maincodingbackground}>
          <div className={styles.headerwrapper}>
            <FaceNav
              setTextSelector={(text) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
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
        <div className={styles.maincodingbackground}>
          <div className={styles.socialmediabar}>
            <Navbar />{" "}
          </div>
        </div>
      )}
    </>
  );
}
