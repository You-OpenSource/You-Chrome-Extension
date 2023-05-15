/*global chrome*/

chrome.runtime.onMessage.addListener((req) => {
  const { domain, shouldOpenNewTab: _shouldOpenNewTab } = req;

  if (domain === "extensionlink") {
    chrome.tabs.create({
      url: "https://chrome.google.com/webstore/detail/youcom/afiglppdonkdbkkaghbnpklddbemkbpj",
    });
  }
});

chrome.runtime.setUninstallURL("https://about.you.com/exit-survey");

// https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled
chrome.runtime.onInstalled.addListener((request) => {
  if (request.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      active: true,
      url: "https://about.you.com/welcome/",
    });
  }
});

// Let the you.com website detect whether the extension is installed
// Source: https://stackoverflow.com/a/21043701
chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request) {
    if (request.message) {
      if (request.message === "installed") {
        sendResponse(true);
      }
    }
  }
  return true;
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  if (changeInfo.url) {
    chrome.runtime.sendMessage({ msg: "activeTab", pageUrl: changeInfo.url });
  }
});

chrome.runtime.onMessage.addListener((_req, _sender, sendResponse) => {
  // query tabs to find an active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    var activeTabURL = activeTab.url;

    chrome.runtime.sendMessage({ msg: "activeTab", pageUrl: activeTabURL });
    sendResponse(activeTabURL);
  });
});
