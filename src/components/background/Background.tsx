import React, { useState, useRef, useEffect, FunctionComponent } from "react";

import { AboutMe } from "../../Pages/aboutMe/AboutMe";
import { Header } from "../../Pages/HeaderMenu/Header";
import { Navbar } from "../socialmediameny/Navbar";
import { Footer } from "../../Pages/Footer/Footer";
import BackgroundStyles from "./BackgroundStyles.module.css";

type TBackground = {
  showHeader: boolean;
  showBody: boolean;
  showFooter: boolean;
  onNavigated: (page: string) => void;
  text: string;
};

export const Background: FunctionComponent<TBackground> = ({
  showHeader,
  showBody,
  showFooter,
  onNavigated,
  text,
}) => {
  const [textSelector, setTextSelector] = useState("landing page");

  return (
    <>
      {showHeader && !showBody && !showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.headerwrapper}>
            <Header
              setTextSelector={(text: string) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />
          </div>
        </div>
      )}
      {showHeader && showBody && !showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.headerwrapper}>
            <Header
              setTextSelector={(text: string) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
          </div>
          <div className={BackgroundStyles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} setTextSelector={""} />{" "}
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />
          </div>
        </div>
      )}
      {!showHeader && showBody && showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} setTextSelector={""} />
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />{" "}
          </div>
          <div className={BackgroundStyles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {!showHeader && showBody && !showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} setTextSelector={""} />
          </div>

          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />{" "}
          </div>
        </div>
      )}
      {!showHeader && !showBody && showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.footerbox}>
            <Footer />
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />{" "}
          </div>
        </div>
      )}
      {showHeader && !showBody && showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.headerwrapper}>
            <Header
              setTextSelector={(text: string) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />
          </div>
          <div className={BackgroundStyles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {showHeader && showBody && showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.headerwrapper}>
            <Header
              setTextSelector={(text: string) => {
                setTextSelector(text);
                onNavigated(text);
              }}
            />
          </div>
          <div className={BackgroundStyles.aboutmewrapper}>
            <AboutMe textSelector={textSelector} setTextSelector={""} />{" "}
          </div>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />
          </div>
          <div className={BackgroundStyles.footerbox}>
            <Footer />
          </div>
        </div>
      )}
      {!showHeader && !showBody && !showFooter && (
        <div className={BackgroundStyles.maincodingbackground}>
          <div className={BackgroundStyles.socialmediabar}>
            <Navbar open={false} setOpen={false} />{" "}
          </div>
        </div>
      )}
    </>
  );
};
