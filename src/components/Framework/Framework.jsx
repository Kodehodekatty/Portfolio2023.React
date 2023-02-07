import React, { useState, useRef } from "react";

import styled from "styled-components";
import style2 from "../FrameworkStyles.module.css";
import { ShowImage } from "./ShowImage/ShowImage";
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

// the different looking me images; my face, body and footer

export default function Framework({
  showHeader,
  showBody,
  showFooter,
  setShowHeader,
  setShowBody,
  setShowFooter,
}) {
  return (
    <div className={style2.wraptest}>
      {" "}
      <span className={style2.something}>
        <ShowImage
          showHeader={showHeader}
          showFooter={showFooter}
          showBody={showBody}
        />
        <div className={style2.container}>
          <div className={style2.btnGroup}>
            <Button
              className={style2.btn1}
              onClick={() => setShowHeader((prev) => !prev)}
            >
              {!showHeader ? face : ""}
            </Button>
            <Button
              className={style2.btn1}
              onClick={() => setShowBody((prev) => !prev)}
            >
              {!showBody ? body : ""}
            </Button>
            <Button
              className={style2.btn1}
              onClick={() => setShowFooter((prev) => !prev)}
            >
              {!showFooter ? footer : ""}
            </Button>
          </div>
        </div>{" "}
      </span>{" "}
    </div>
  );
}
