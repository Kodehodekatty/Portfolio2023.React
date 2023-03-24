// imports
import Background from "./components/Background";
import Framework from "./components/Framework/Framework";
import React, { useState } from "react";
import { useBodyParts } from "./hooks/useBodyParts";

//imports styles
import "./styles/App.css";
import "./styles/index.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="main">
      <Framework
        showHeader={showHeader}
        showBody={showBody}
        showFooter={showFooter}
        setShowHeader={setShowHeader}
        setShowBody={setShowBody}
        setShowFooter={setShowFooter}
      />

      <Background
        onNavigated={(page) => {
          if (page == "om meg") {
            setShowBody(true);
          }
          if (page == "mitt arbeid") {
            setShowBody(true);
          }
          if (page == "kontakt") {
            setShowBody(true);
          }
        }}
        showHeader={showHeader}
        showBody={showBody}
        showFooter={showFooter}
      />
    </div>
  );
}

export default App;
