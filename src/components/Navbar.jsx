import MenuStyles from "./MenuStyles.module.css";
import { useState } from "react";
import github from "../images/icons/github.png";
import gmail from "../images/icons/gmail.png";
import cv from "../images/icons/CV.png";
import linkedin from "../images/icons/Linkedin.png";

const List = () => {
  return (
    <ul className={MenuStyles.iconlist}>
      {open && <p className={MenuStyles.iconNames}>Github</p>}
      <li className={MenuStyles.media}>
        {" "}
        <a href="https://github.com/Kodehodekatty?tab=repositories">
          <img src={github} className={MenuStyles.Social} />
        </a>
      </li>
      {open && <p className={MenuStyles.iconNames}>Gmail</p>}
      <li className={MenuStyles.media}>
        <a href="mailto: kathrinestangeland@gmail.com">
          <img src={gmail} className={MenuStyles.Social} />{" "}
        </a>{" "}
      </li>
      {open && <p className={MenuStyles.iconNames}>CV</p>}
      <li className={MenuStyles.media}>
        <a href="src/files/CV.kathrinestangeland2023.pdf" download>
          <img src={cv} className={MenuStyles.Social} />{" "}
        </a>
      </li>
      {open && <p className={MenuStyles.iconNames}>Linkdin</p>}
      <li className={MenuStyles.media}>
        <a
          href="https://linkedin.com/in/kathrine-stangeland-1b6417171"
          target="_blank"
        >
          <img src={linkedin} className={MenuStyles.Social} />{" "}
        </a>
      </li>
    </ul>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={MenuStyles.container}>
      <nav className={MenuStyles.MenuNav}>
        <button onClick={() => setOpen(!open)} className={MenuStyles.topButton}>
          {" "}
          Social Media
        </button>
        {open && <List />}

        {open ? (
          <div className={MenuStyles.textlist}>My social media links</div>
        ) : (
          <div className={MenuStyles.textlist}>click here</div>
        )}
      </nav>
    </div>
  );
}
