/*global chrome*/

chrome.runtime.setUninstallURL("https://about.you.com/exit-survey");

// https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled
chrome.runtime.onInstalled.addListener((request) => {
  if (request.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ active: true, url: "https://you.com" });
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
