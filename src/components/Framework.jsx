import React, { useState } from "react";

import shadowme from "../images/Frame 13.png";
import shadowbody from "../images/secondshadowbody.png";
import shadowfooter from "../images/shadowfooter.png";
import fullshadow from "../images/fullshadow.png";

import styled from "styled-components";
import codeGraphicImg from "../images/image116.png";
import styles from "../components/BackgroundStyles.module.css";
import style2 from "../components/FrameworkStyles.module.css";
import faceandbody from "../images/VSC/faceandbodyCODE.png";

const face = "<face>";
const body = "<body>";
const footer = "<footer>";

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

// main shadow me starter image

export function ShowImage() {
  return <img src={fullshadow} className={style2.shadowmain} />;
}

// the different looking me's, my face, body and footer

export default function Framework({
  showFace,
  setShowFace,
  showBody,
  setShowBody,
  showFooter,
  setShowFooter,
}) {
  return (
    <>
      {" "}
      {!showFace && (
        <Button className={style2.btn1} onClick={ClickHandler}>
          {face};
        </Button>
      )}
      {!showBody && (
        <Button className={style2.btn2} onClick={ClickHandler2}>
          {body}
        </Button>
      )}
      {!showFooter && (
        <Button className={style2.btn3} onClick={ClickHandler3}>
          {footer}
        </Button>
      )}{" "}
      {showFace && <img className={style2.faceimg} src={shadowme} />}
      {showBody && <img className={style2.bodyimg} src={shadowbody} />}
      {showFooter && <img className={style2.footerimg} src={shadowfooter} />}
      {!showFace && !showBody && !showFooter && <ShowImage />}
    </>
  );

  // the buttons showing the different images

  function ClickHandler() {
    setShowFace(true);
    setShowBody(false);
    setShowFooter(false);
  }
  function ClickHandler2() {
    setShowBody(true);
    setShowFace(false);
    setShowFooter(false);
  }

  function handleChange() {}
  function ClickHandler3() {
    setShowBody(false);
    setShowFace(false);
    setShowFooter(true);
  }
}
