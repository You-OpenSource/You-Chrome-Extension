import * as React from "react";
import { useEffect, useState } from "react";
import {
  CloseIcon,
  Embed,
  EmbedContainer,
  LoadingComponent,
  LoadingContainer,
  LoadingImage,
} from "./App.styles";
import YouBotImage from "./youbot.png";
import CloseX from "./close.svg";
import { getEmbedHost } from "./util";

const GUEST_ID_KEY = "google_extension_guest_id";

const getImages = () => {
  if (window.chrome) {
    return {
      youbot: window.chrome.runtime.getURL(YouBotImage),
      close: window.chrome.runtime.getURL(CloseX),
    };
  }

  return {
    youbot: "",
    close: "",
  };
};

const LoadingComponentWithDots = (): JSX.Element => {
  return (
    <LoadingComponent>
      Loading YouChat <span className="loader__dot">. </span>
      <span className="loader__dot">. </span>
      <span className="loader__dot">.</span>
    </LoadingComponent>
  );
};

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let query = urlParams.get("q");
  const finalEmbedHeight = 510;
  const [showApp, setShowApp] = useState(true);
  const [embedHeight, setEmbedHeight] = useState(0);
  const [guestId, setGuestId] = useState<string | null>(null);
  const handleOnEmbedLoad = () => {
    // timeout to prevent a flash of white
    setTimeout(() => {
      setEmbedHeight(finalEmbedHeight);
    }, 200);
  };
  const { youbot, close } = getImages();

  const hideApp = () => setShowApp(false);

  // set an unique identifier for the extension
  useEffect(() => {
    if (window?.chrome) {
      const chrome = window.chrome;
      chrome.storage.sync
        .get(GUEST_ID_KEY)
        .then((items: { [x: string]: any }) => {
          const guestId = items[GUEST_ID_KEY];
          if (guestId) {
            setGuestId(guestId);
          } else {
            const guestId = crypto.randomUUID();
            chrome.storage.sync.set({ [GUEST_ID_KEY]: guestId }).then(() => {
              setGuestId(guestId);
            });
          }
        });
    }
  }, []);

  return showApp ? (
    <EmbedContainer>
      {embedHeight === 0 && guestId && (
        <LoadingContainer height={finalEmbedHeight}>
          <LoadingImage src={youbot} alt="YouChat loading image" />
          <LoadingComponentWithDots />
        </LoadingContainer>
      )}
      <Embed
        src={`${getEmbedHost()}/googlechat?q=${query}&gid=${guestId}&tbm=youchat`}
        height={embedHeight}
        onLoad={handleOnEmbedLoad}
      />
      <CloseIcon src={close} onClick={hideApp} />
    </EmbedContainer>
  ) : (
    <></>
  );
}

export default App;
