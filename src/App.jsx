// imports
// have not set up routes yet but will.
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  Navigate,
  HashRouter,
} from "react-router-dom";

import Background from "./components/Background";
import Framework from "./components/Framework";
import React, { useState } from "react";
import AboutMe from "./Pages/AboutMe";

//imports styles
import styles from "./components/BackgroundStyles.module.css";
import styles2 from "./components/frameworkStyles.module.css";
import "./styles/App.css";

function App() {
  const [partShowing, setPartShowing] = useState("none");
  const [inSequence, setInSequence] = useState(false);

  return (
    <div className="mainWallpaper">
      <div>
        <Background partShowing={partShowing} inSequence={inSequence} />

        <Framework
          partShowing={partShowing}
          setPartShowing={setPartShowing}
          inSequence={inSequence}
          setInSequence={setInSequence}
        />
      </div>
    </div>
  );
}

export default App;
