import React, { useState, useRef, useEffect } from "react";

import styles from "../components/BackgroundStyles.module.css";

import AboutMe from "../Pages/AboutMe";
import FaceNav from "../Pages/FaceNav";
import Navbar from "./Navbar";

import Footer from "../Pages/Footer";

export default function Background({ showHeader, showBody, showFooter }) {
  const [textSelector, setTextSelector] = useState("landing page");

  if(showHeader && !showBody && !showFooter){
    return <div className={styles.whatever}>
            <FaceNav setTextSelector={setTextSelector} />
            <div className={styles.socialmediabar}>
              <Navbar />
            </div>
          </div>
  }
  if(showHeader && showBody && !showFooter){
    return <div className={styles.whatever}>
            <FaceNav setTextSelector={setTextSelector} />
            <AboutMe textSelector={textSelector} />{" "}
            <div className={styles.socialmediabar}>
              <Navbar />
            </div>
          </div>
  }
  if(!showHeader && showBody && showFooter){
    return <div className={styles.whatever}>
            <AboutMe textSelector={textSelector} />
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
            <Footer />
          </div>
  }
  if(!showHeader && showBody && !showFooter){
    return <div className={styles.whatever}>
            <AboutMe textSelector={textSelector} />

            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
  }
  if(!showHeader && !showBody && showFooter){
    return <div className={styles.whatever}>
            <Footer />
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
  }
  if(showHeader && !showBody && showFooter){
    return <div className={styles.whatever}>
            <FaceNav setTextSelector={setTextSelector} />
            <div className={styles.socialmediabar}>
              <Navbar />
            </div>
            <Footer />
          </div>
  }
  if(showHeader && showBody && showFooter){
    return <div className={styles.whatever}>
            <FaceNav setTextSelector={setTextSelector} />
            <AboutMe textSelector={textSelector} />{" "}
            <div className={styles.socialmediabar}>
              <Navbar />
            </div>
            <Footer />
          </div>
  }
  if(!showHeader && !showBody && !showFooter){
    return <div className={styles.whatever}>
            <div className={styles.socialmediabar}>
              <Navbar />{" "}
            </div>
          </div>
  }
}
