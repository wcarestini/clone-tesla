import React from "react";
import { Page } from "./components/Page";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Page children />
      <GlobalStyles />
    </>
  );
}

export default App;
