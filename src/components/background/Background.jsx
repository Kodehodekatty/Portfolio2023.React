import React, { useState, useRef, useEffect } from "react";

import styles from "./BackgroundStyles.module.css";
import AboutMe from "../../Pages/aboutMe/AboutMe";
import Header from "../../Pages/HeaderMenu/Header";
import Navbar from "../socialmediameny/Navbar";
import Footer from "../../Pages/Footer/Footer";

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
            <Header
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
            <Header
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
            <Header
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
            <Header
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
