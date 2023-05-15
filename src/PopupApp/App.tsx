import * as React from "react";

import { INITIAL_PAGE } from "./constants";

import * as Styles from "./App.styles";

function App() {
  const [activePageUrl, setActivePageUrl] = React.useState("");
  const chatRef = React.useRef<HTMLIFrameElement>(null);
  const checkURLIntervalRef = React.useRef<ReturnType<typeof setInterval>>();

  const sendActivePageUrl = (activePage: string) => {
    try {
      chatRef.current?.contentWindow?.postMessage(
        {
          source: "chrome_plugin",
          activePageUrl: activePage,
        },
        "*"
      );
    } catch (e) {
      console.error("post message failed: ", e);
    }
  };

  const handleTabUrlUpdated = (
    req: { msg: string; pageUrl: string },
    _sender: unknown,
    _sendResponse: unknown
  ) => {
    if (req.msg === "activeTab") {
      setActivePageUrl(req.pageUrl);
      sendActivePageUrl(req.pageUrl);
    }
  };

  const openNewTab = (domain: string, shouldOpenNewTab: boolean = true) => {
    chrome.runtime.sendMessage(chrome.runtime.id, {
      domain: domain,
      shouldOpenNewTab: shouldOpenNewTab,
    });
  };

  React.useEffect(() => {
    // find initial url
    checkURLIntervalRef.current = setInterval(() => {
      chrome.runtime.sendMessage("provideActiveTabUrl");
    }, 1000);

    return () => {
      clearInterval(checkURLIntervalRef.current);
    };
  }, []);

  React.useLayoutEffect(() => {
    if (activePageUrl) {
      sendActivePageUrl(activePageUrl);
    }
  }, [activePageUrl]);

  React.useEffect(() => {
    chrome.runtime.onMessage.addListener(handleTabUrlUpdated);

    return () => {
      chrome.runtime.onMessage.removeListener(handleTabUrlUpdated);
    };
  }, []);

  return (
    <Styles.App>
      <iframe
        ref={(element) => {
          // @ts-expect-error
          chatRef.current = element;
        }}
        title="chat"
        height="100%"
        width="100%"
        src={INITIAL_PAGE}
      />

      <Styles.SeparatorContainer onClick={() => openNewTab("extensionlink")}>
        <Styles.SeparationText>
          Set YouChat as your default search
        </Styles.SeparationText>
      </Styles.SeparatorContainer>
    </Styles.App>
  );
}

export default App;
