import React, { useState, useRef, useEffect, FunctionComponent } from "react";

import shadowbody from "../../../images/secondshadowbody.png";
import shadowface from "../../../images/faceshadow.png";
import shadowfooter from "../../../images/shadowfooter.png";
import fullshadow from "../../../images/fullshadow.png";
import faceandbody from "../../../images/faceandbody.png";
import fullkatty from "../../../images/VSC/fullkatty.png";
import bodyandfooter from "../../../images/bodyandfootershadow.png";
import faceandfooter from "../../../images/faceandfooter.png";

import FrameworkStyles from "../../Framework/FrameworkStyles.module.css";

type TShowImage = {
  showHeader: boolean;
  showBody: boolean;
  showFooter: boolean;
};

export const ShowImage: FunctionComponent<TShowImage> = ({
  showHeader,
  showBody,
  showFooter,
}) => {
  return (
    <>
      {/* showing shadow me at the start*/}
      {!showHeader && !showBody && !showFooter && (
        <img className={FrameworkStyles.shadowmain} src={fullshadow} />
      )}
      {showHeader && !showBody && !showFooter && (
        <img className={FrameworkStyles.shadowmain} src={shadowface} />
      )}
      {showHeader && showBody && !showFooter && (
        <img className={FrameworkStyles.shadowmain} src={faceandbody} />
      )}
      {!showHeader && showBody && !showFooter && (
        <img className={FrameworkStyles.shadowmain} src={shadowbody} />
      )}
      {!showHeader && showBody && showFooter && (
        <img className={FrameworkStyles.shadowmain} src={bodyandfooter} />
      )}
      {showHeader && !showBody && showFooter && (
        <img className={FrameworkStyles.shadowmain} src={faceandfooter} />
      )}
      {!showHeader && !showBody && showFooter && (
        <img className={FrameworkStyles.shadowmain} src={shadowfooter} />
      )}
      {showHeader && showBody && showFooter && (
        <img className={FrameworkStyles.shadowmain} src={fullkatty} />
      )}
    </>
  );
};
