import HeaderStyles from "./HeaderStyles.module.css";
import React, { FunctionComponent } from "react";

type THeader = {
  setTextSelector: (text: string) => void;
};

export const Header: FunctionComponent<THeader> = ({ setTextSelector }) => {
  return (
    <div className={HeaderStyles.FaceNavWrap}>
      <ul className={HeaderStyles.list}>
        <li className={HeaderStyles.navigation}>
          <button onClick={() => setTextSelector("om meg")}>Om meg</button>
        </li>
        <li className={HeaderStyles.navigation}>
          <button onClick={() => setTextSelector("mitt arbeid")}>
            Mitt Arbeid
          </button>
        </li>
        <li className={HeaderStyles.navigation}>
          <button onClick={() => setTextSelector("kontakt")}>Kontakt</button>
        </li>
      </ul>
    </div>
  );
};
