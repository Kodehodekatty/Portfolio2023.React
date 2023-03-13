import React, { useState, useRef } from "react";

import styled from "styled-components";
import style2 from "../FrameworkStyles.module.css";
import { ShowImage } from "./ShowImage/ShowImage";
const face = "<Head>";
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
    <section>
      {" "}
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
      <span className={style2.kattywrapandbuttons}>
        <ShowImage
          showHeader={showHeader}
          showFooter={showFooter}
          showBody={showBody}
        />
      </span>
    </section>
  );
}
