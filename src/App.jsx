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
} from "react-router-dom";

import Background from "./components/Background";
import Framework from "./components/Framework";
import React, { useState } from "react";

//imports styles
import styles from "./components/BackgroundStyles.module.css";
import styles2 from "./components/frameworkStyles.module.css";
import "./styles/App.css";

function App() {
  const [showFace, setShowFace] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="mainWallpaper">
      <div>
        <Background
          showFace={showFace}
          setShowBody={setShowBody}
          showBody={showBody}
          setShowFace={setShowFace}
          showFooter={showFooter}
          setShowFooter={setShowFooter}
        />

        <Framework
          showFace={showFace}
          setShowBody={setShowBody}
          showBody={showBody}
          setShowFace={setShowFace}
          showFooter={showFooter}
          setShowFooter={setShowFooter}
        />
      </div>
    </div>
  );
}

export default App;
