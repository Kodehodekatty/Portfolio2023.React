// imports

import "./styles/App.css";

import Background from "./components/Background";
import Framework from "./components/Framework";
import React, { useState } from "react";
import styles from "./components/BackgroundStyles.module.css";
import styles2 from "./components/frameworkStyles.module.css";

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
