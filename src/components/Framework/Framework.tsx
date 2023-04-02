//imports
import React, { useState, useRef, FunctionComponent } from "react";
import styled from "styled-components";
import { ShowImage } from "./ShowImage/ShowImage";

import FrameworkStyles from "./FrameworkStyles.module.css";

//styled button
const face = "<Head>";
const body = "<body>";
const footer = "<footer>";

interface ButtonProps {
  emphasized: boolean;
  onClick: () => void;
}

const Button = styled.button<ButtonProps>`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

//

//types
type TFramework = {
  showHeader: boolean;
  showBody: boolean;
  showFooter: boolean;
  setShowHeader: (showHeader: boolean) => void;
  setShowBody: (showBody: boolean) => void;
  setShowFooter: (showFooter: boolean) => void;
};

// the different looking me images; my face, body and footer

export const Framework: FunctionComponent<TFramework> = ({
  showHeader,
  showBody,
  showFooter,
  setShowHeader,
  setShowBody,
  setShowFooter,
}) => {
  return (
    <div className={FrameworkStyles.kattywrapandbuttons}>
      <div className={FrameworkStyles.btnGroup}>
        <Button
          className="btn1"
          onClick={() => setShowHeader((prev: any) => !prev)}
        >
          {!showHeader ? face : ""}
        </Button>
        <Button
          className={FrameworkStyles.btn1}
          onClick={() => {
            setShowBody((prev) => !prev);
          }}
        >
          {!showBody ? body : ""}
        </Button>

        <Button
          className={FrameworkStyles.btn1}
          onClick={() => {
            setShowFooter((prev) => !prev);
          }}
        >
          {!showFooter ? footer : ""}
        </Button>
      </div>
      <ShowImage
        showHeader={showHeader}
        showFooter={showFooter}
        showBody={showBody}
      />{" "}
    </div>
  );
};
