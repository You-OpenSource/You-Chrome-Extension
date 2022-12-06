/*global chrome*/

chrome.runtime.onMessage.addListener((req) => {
  if (req == "linkwrite") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40write" });
  } else if (req == "linkcode") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40code" });
  } else if (req == "linkdraw") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40draw" });
  } else if (req == "code") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_1"],
      disableRulesetIds: ["ruleset_2", "ruleset_3", "ruleset_4"],
    });
    chrome.tabs.create({ url: "https://code.you.com/" });
  } else if (req == "ddg") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_3"],
      disableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_4"],
    });
    chrome.tabs.create({ url: "https://duckduckgo.com/" });
  } else if (req == "google") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_4"],
      disableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_3"],
    });
    chrome.tabs.create({ url: "https://www.google.com/" });
  } else {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_2"],
      disableRulesetIds: ["ruleset_1", "ruleset_3", "ruleset_4"],
    });
    chrome.tabs.create({ url: "https://you.com/" });
  }
});

chrome.runtime.setUninstallURL("https://about.you.com/exit-survey");

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ active: true, url: "https://about.you.com/welcome/" });
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
      if (request.message == "installed") {
        sendResponse(true);
      }
    }
  }
  return true;
});
