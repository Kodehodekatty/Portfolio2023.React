import MenuStyles from "./MenuStyles.module.css";
import { useState } from "react";
import github from "../images/icons/github.png";
import gmail from "../images/icons/gmail.png";
import cv from "../images/icons/CV.png";
import linkedin from "../images/icons/Linkedin.png";
import arrow from "../images/icons/arrow.png";
import arrowdown from "../images/icons/arrowdown.png";

const List = () => {
  return (
    <ul className={MenuStyles.socialmediagrid}>
      <a href="https://github.com/Kodehodekatty?tab=repositories">
        <li className={MenuStyles.socialclick}>
          {open && <p>Github</p>}

          <img src={github} className={MenuStyles.Socialmediaimage} />
        </li>
      </a>
      <a href="mailto: kathrinestangeland@gmail.com">
        <li className={MenuStyles.socialclick}>
          {open && <p>Gmail</p>}

          <img src={gmail} className={MenuStyles.Socialmediaimage} />
        </li>
      </a>

      <a href="src/files/CV.kathrinestangeland2023.pdf" download>
        <li className={MenuStyles.socialclick}>
          {open && <p>CV</p>}
          <img src={cv} className={MenuStyles.Socialmediaimage} />
        </li>
      </a>

      <a
        href="https://linkedin.com/in/kathrine-stangeland-1b6417171"
        target="_blank"
      >
        <li className={MenuStyles.socialclick}>
          {open && <p>Linkdin</p>}
          <img src={linkedin} className={MenuStyles.Socialmediaimage} />{" "}
        </li>{" "}
      </a>
    </ul>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={MenuStyles.socialbuttonandiconsGrid}>
      {" "}
      <section className={MenuStyles.btnwrap}>
        {" "}
        <button onClick={() => setOpen(!open)}>
          {" "}
          <div className={MenuStyles.btnText}>
            {" "}
            <img src={open ? arrowdown : arrow} /> Social Media
          </div>
        </button>{" "}
      </section>
      {open && <List />}
    </div>
  );
}
