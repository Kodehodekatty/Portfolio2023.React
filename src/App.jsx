// imports

import Background from "./components/Background";
import Framework from "./components/Framework/Framework";
import Navbar from "./components/Navbar";
import style from "./components/BackgroundStyles.module.css";
import React, { useState } from "react";

//imports styles

import "./styles/App.css";
import "./styles/index.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="grid">
      <div className="wrapper">
        <Framework
          showHeader={showHeader}
          showBody={showBody}
          showFooter={showFooter}
          setShowHeader={setShowHeader}
          setShowBody={setShowBody}
          setShowFooter={setShowFooter}
        />
      </div>
      <div className="container">
        <Background
          showHeader={showHeader}
          showBody={showBody}
          showFooter={showFooter}
        />
      </div>
    </div>
  );
}

export default App;
