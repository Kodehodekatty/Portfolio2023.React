// imports

import Background from "./components/Background";
import Framework from "./components/Framework";

import React, { useState } from "react";

//imports styles

import "./styles/App.css";

function App() {
  const [partShowing, setPartShowing] = useState("none");
  const [inSequence, setInSequence] = useState(false);

  return (
    <>
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
