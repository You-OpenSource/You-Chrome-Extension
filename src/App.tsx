import React from "react";

import { YOUCHAT } from "./constants";

const handleSetSearchUrl = (
  domain: string,
  shouldOpenNewTab: boolean = true
) => {
  chrome.runtime.sendMessage(chrome.runtime.id, {
    domain: domain,
    shouldOpenNewTab: shouldOpenNewTab,
  });
};

function App() {
  React.useEffect(() => {
    handleSetSearchUrl(YOUCHAT, false);
  }, []);

  return null;
}

export default App;
