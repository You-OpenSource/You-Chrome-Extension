import * as React from "react";

import { INITIAL_PAGE } from "./constants";

import * as Styles from "./App.styles";
import SendIcon from "../send.svg";

const getImages = () => {
  if (window.chrome) {
    return {
      send: window.chrome.runtime.getURL(SendIcon),
    };
  }

  return {
    send: "",
  };
};

function App() {
  const [activePageUrl, setActivePageUrl] = React.useState("");
  const chatRef = React.useRef<HTMLIFrameElement>(null);
  const { send } = getImages();

  const handleTabUrlUpdated = (
    req: { msg: string; pageUrl: string },
    _sender: unknown,
    _sendResponse: unknown
  ) => {
    if (req.msg === "activeTab") {
      setActivePageUrl(req.pageUrl);
    }
  };

  const openNewTab = (domain: string, shouldOpenNewTab: boolean = true) => {
    chrome.runtime.sendMessage(chrome.runtime.id, {
      domain: domain,
      shouldOpenNewTab: shouldOpenNewTab,
    });
  };

  const handleSearch = (searchValue: string) => {
    try {
      chatRef.current?.contentWindow?.postMessage(
        {
          source: "chrome_plugin",
          query: searchValue,
        },
        "*"
      );
    } catch (e) {
      console.error("post message failed: ", e);
    }
  };

  const handleSummarize = () => {
    chrome.runtime.sendMessage("provideActiveTabUrl");

    try {
      chatRef.current?.contentWindow?.postMessage(
        {
          source: "chrome_plugin",
          query: `Summarize ${activePageUrl}`,
        },
        "*"
      );
    } catch (e) {
      console.error("post message failed: ", e);
    }
  };

  React.useEffect(() => {
    chrome.runtime.sendMessage("provideActiveTabUrl");
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
      <Styles.AlternativeWrapperRow>
        <Styles.SummarizeButton key="summarize" onClick={handleSummarize}>
          summarize this page
          <Styles.SummarizeButtonIcon>
            <Styles.SendIcon src={send} />
          </Styles.SummarizeButtonIcon>
        </Styles.SummarizeButton>
        {[
          "healthy recipes",
          "barcelona itinerary",
          "best backpacks",
          "explain recursion",
        ].map((value) => (
          <Styles.SummarizeButton
            key={value}
            onClick={() => handleSearch(value)}
          >
            {value}
            <Styles.SummarizeButtonIcon>
              <Styles.SendIcon src={send} />
            </Styles.SummarizeButtonIcon>
          </Styles.SummarizeButton>
        ))}
      </Styles.AlternativeWrapperRow>

      <Styles.SeparatorContainer onClick={() => openNewTab("extensionlink")}>
        <Styles.SeparationText>Set your default search</Styles.SeparationText>
      </Styles.SeparatorContainer>
    </Styles.App>
  );
}

export default App;
