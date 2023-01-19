import React, { useState } from "react";

import codeGraphicImg from "../images/image116.png";
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

export default function Background({
  // the coding background and the different coding images connected to the image of me with the buttons

  showFace,

  showBody,

  showFooter,

  setShowFace,

  setShowBody,
}) {
  return (
    <div className={styles.test}>
      {!showFace && !showBody && !showFooter && (
        <img src={codeGraphicImg} className={styles.codebackground} />
      )}
      {showFace && <img src={facecode} className={styles.Headwallpaper} />}{" "}
      {showFace && <h1 className={styles.welcome}> Welcome to my page </h1>}{" "}
      {showBody && <img src={bodycode} className={styles.bodyWallpaper} />}
      {showFooter && (
        <img src={footercode} className={styles.footerwallpaper} />
      )}
    </div>
  );
}
