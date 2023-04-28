import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { googleConfig, rootClassName } from "./config";

// POPUP_WINDOW
import "./PopupApp";

// base check to make sure we're on the main search page
const searchParams = new URLSearchParams(window?.location?.href);
const doNotRender = searchParams.has("tbm");
if (!doNotRender) {
  const { selectors: googleSelectors } = googleConfig;

  const app = document.createElement("div");
  app.classList.add(rootClassName);

  const googleRightLineContainer = document.querySelector(
    `[id="${googleSelectors.rightline}"]`
  );
  if (googleRightLineContainer) {
    // make sure the left border aligns properly with other elements
    // a little hacky here since I don't want to load in a whole
    // stylesheet for one style
    app.setAttribute("style", "margin-bottom: -8px");
    const otherRightLineElement = document.querySelector(
      `#${googleSelectors.rightline} > [role="complementary"]`
    );
    const otherRightLineElementClassList = otherRightLineElement?.classList;
    // a really sneaky way to get all of the styles applied to
    // google's own right line elements without hard coding them
    otherRightLineElementClassList?.forEach((name) => {
      app.classList.add(name);
    });
    googleRightLineContainer.prepend(app);
  } else {
    const googleMainSerpContainer = document.querySelector(
      `[id="${googleSelectors.serpContainer}"]`
    );
    if (googleMainSerpContainer) {
      app.classList.add("no-google-right-line");
      app.id = googleSelectors.rightline;
      googleMainSerpContainer.append(app);
    }
  }

  const root = document.getElementsByClassName(rootClassName)[0];

  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  }
}
