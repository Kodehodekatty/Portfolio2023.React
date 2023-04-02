// imports
import { Background } from "./components/background/Background";
import { Framework } from "./components/Framework/Framework";
import React, { useState, FunctionComponent } from "react";

//imports styles
import "./styles/App.css";
import "./styles/index.css";

const App: FunctionComponent = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [showBody, setShowBody] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(false);

  return (
    <div className="main">
      <Background
        onNavigated={(page: string) => {
          if (page == "om meg") setShowBody(true);
          if (page == "mitt arbeid") setShowBody(true);
          if (page == "kontakt") setShowBody(true);
        }}
        showHeader={showHeader}
        showBody={showBody}
        showFooter={showFooter}
        text={""}
      />
      <Framework
        showHeader={showHeader}
        showBody={showBody}
        showFooter={showFooter}
        setShowHeader={setShowHeader}
        setShowBody={setShowBody}
        setShowFooter={setShowFooter}
      />
    </div>
  );
};

export default App;
