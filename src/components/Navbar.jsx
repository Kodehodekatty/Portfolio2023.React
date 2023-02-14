import MenuStyles from "./MenuStyles.module.css";
import { useState } from "react";
import github from "../images/icons/github.png";
import gmail from "../images/icons/gmail.png";
import cv from "../images/icons/CV.png";
import linkedin from "../images/icons/Linkedin.png";
import arrow from "../images/arrow.png";

const List = () => {
  return (
    <div className={MenuStyles.test}>
      <ul className={MenuStyles.iconlist}>
        <a href="https://github.com/Kodehodekatty?tab=repositories">
          {" "}
          <div className={MenuStyles.socialclick}>
            {open && <p className={MenuStyles.iconNames}>Github</p>}
            <li className={MenuStyles.media}>
              {" "}
              <img src={github} className={MenuStyles.Social} />
            </li>
          </div>{" "}
        </a>
        <a href="mailto: kathrinestangeland@gmail.com">
          <div className={MenuStyles.socialclick}>
            {open && <p className={MenuStyles.iconNames}>Gmail</p>}
            <li className={MenuStyles.media}>
              <img src={gmail} className={MenuStyles.Social} />{" "}
            </li>{" "}
          </div>{" "}
        </a>

        <a href="src/files/CV.kathrinestangeland2023.pdf" download>
          <div className={MenuStyles.socialclick}>
            {open && <p className={MenuStyles.iconNames}>CV</p>}
            <li className={MenuStyles.media}>
              <img src={cv} className={MenuStyles.Social} />{" "}
            </li>{" "}
          </div>{" "}
        </a>

        <a
          href="https://linkedin.com/in/kathrine-stangeland-1b6417171"
          target="_blank"
        >
          {" "}
          <div className={MenuStyles.socialclick}>
            {open && <p className={MenuStyles.iconNames}>Linkdin</p>}
            <li className={MenuStyles.media}>
              <img src={linkedin} className={MenuStyles.Social} />{" "}
            </li>{" "}
          </div>{" "}
        </a>
      </ul>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={MenuStyles.MenuNav}>
      <div className={MenuStyles.socialbox}>
        {" "}
        <span className={MenuStyles.btnwrap}>
          {" "}
          <button
            onClick={() => setOpen(!open)}
            className={MenuStyles.topButton}
          >
            {" "}
            <div className={MenuStyles.btnText}> Social Media</div>
          </button>{" "}
        </span>
        {open && <List />}
      </div>
    </nav>
  );
}
