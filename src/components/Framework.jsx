import React, { useState, useRef } from "react";
import shadowme from "../images/Frame 13.png";
import shadowbody from "../images/secondshadowbody.png";
import shadowfooter from "../images/shadowfooter.png";
import fullshadow from "../images/fullshadow.png";
import styled from "styled-components";
import style2 from "../components/FrameworkStyles.module.css";
import faceandbody from "../images/faceandbody.png";
import fullkatty from "../images/VSC/fullkatty.png";

const face = "<face>";
const body = "<body>";
const footer = "<footer>";

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

// main shadow me, starter image;

export function ShowImage(props) {
  return (
    <img
      src={
        {
          none: fullshadow,
          face: shadowme,
          body: props.inSequence ? faceandbody : shadowbody,
          footer: props.inSequence ? fullkatty : shadowfooter,
        }[props.partShowing]
      }
      className={style2.shadowmain}
    />
  );
}

// the different looking me images; my face, body and footer

export default function Framework({
  partShowing,
  setPartShowing,
  inSequence,
  setInSequence,
}) {
  return (
    <>
      {" "}
      <div className={style2.something}>
        <ShowImage partShowing={partShowing} inSequence={inSequence} />
        <div className={style2.btnGroup}>
          {partShowing != "face" && (
            <Button className={style2.btn1} onClick={ClickHandler}>
              {face}
            </Button>
          )}

          {!partShowing != "body" && (
            <Button className={style2.btn2} onClick={ClickHandler2}>
              {body}
            </Button>
          )}
          {!partShowing != "footer" && (
            <Button className={style2.btn3} onClick={ClickHandler3}>
              {footer}
            </Button>
          )}
        </div>{" "}
      </div>{" "}
      {partShowing == "body" || (partShowing == "footer" && inSequence)}
    </>
  );

  // the buttons showing the different images

  function ClickHandler() {
    setInSequence(false);
    setPartShowing("face");
  }

  function ClickHandler2() {
    setInSequence(false);
    if (partShowing == "face") {
      setInSequence(true);
    }
    setPartShowing("body");
  }

  function ClickHandler3() {
    setInSequence(false);

    if (partShowing == "body" && inSequence) {
      setInSequence(true);
    }

    setPartShowing("footer");
  }
}
