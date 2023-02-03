// imports

import Background from "./components/Background";
import Framework from "./components/Framework/Framework";
import Navbar from "./components/Navbar";

import React, { useState } from "react";

//imports styles

import "./styles/App.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <>
      <div className="container">
        <Framework
          showHeader={showHeader}
          showBody={showBody}
          showFooter={showFooter}
          setShowHeader={setShowHeader}
          setShowBody={setShowBody}
          setShowFooter={setShowFooter}
        />

        <Background
          showHeader={showHeader}
          showBody={showBody}
          showFooter={showFooter}
        />
      </div>
    </>
  );
}

export default App;
