import React, { useState, useRef, useEffect } from "react";

import codeGraphicImg from "../images/VSC/image16.png";
import Headwallpaper from "../images/Vector19.png";
import styles from "../components/BackgroundStyles.module.css";
import faceandbody from "../images/faceandbody.png";
import footerwallpaper from "../images/vector 20.png";
import bodywallpaper from "../images/Frame.40.png";
import styled from "styled-components";
import facecode from "../images/VSC/faceCODE.png";
import fullshadow from "../images/fullshadow.png";
import style2 from "../components/frameworkStyles.module.css";
import bodycode from "../images/VSC/onlybody.png";
import bodyandface from "../images/VSC/faceandbodyCODE.png";
import footercode from "../images/VSC/footer.png";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import entirebody from "../images/VSC/entirebody.png";

export default function Background({
  // the coding background and the different coding images connected to the image of me with the buttons

  partShowing,
  inSequence,
}) {
  return (
    <div className={styles.test}>
      {partShowing == "none" && (
        <img src={codeGraphicImg} className={styles.codebackground} />
      )}
      {partShowing == "face" && (
        <img src={facecode} className={styles.Headwallpaper} />
      )}{" "}
      {partShowing == "face" && (
        <h1 className={styles.welcome}>Hi, I'm a frontend developer</h1>
      )}
      {partShowing == "body" && (
        <img
          src={inSequence ? bodyandface : bodycode}
          className={styles.bodyWallpaper}
        />
      )}
      {partShowing == "footer" && (
        <img
          src={inSequence ? entirebody : footercode}
          className={styles.footerwallpaper}
        />
      )}
    </div>
  );
}
