// imports

import Background from "./components/Background";
import Framework from "./components/Framework";
import Navbar from "./components/Navbar";

import React, { useState } from "react";

//imports styles

import "./styles/App.css";
import MenuStyles from "./components/MenuStyles.module.css";

function App() {
  const [partShowing, setPartShowing] = useState("none");
  const [inSequence, setInSequence] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <>
      <div className={MenuStyles.DropdownElement}>
        <Navbar />
      </div>
      <div className="container">
        <Framework
          partShowing={partShowing}
          setPartShowing={setPartShowing}
          inSequence={inSequence}
          setInSequence={setInSequence}
        />

        <Background partShowing={partShowing} inSequence={inSequence} />
      </div>
    </>
  );
}

export default App;
