/*global chrome*/

chrome.runtime.onMessage.addListener((req) => {
  const queries = [
    "What+is+the+difference+between+AI+and+machine+learning",
    "What+is+the+best+poem",
    "What+is+the+capital+of+France",
    "What+is+the+meaning+of+life",
    "Tell+me+a+joke",
    "How+can+I+learn+more+about+artificial+intelligence",
    "How+can+I+get+started+with+coding",
    "What+are+the+major+trends+in+the+tech+industry+right+now",
    "Can+you+provide+a+brief+summary+of+a+recent+news+article",
    "Write+a+sequel+about+forrest+gump+movie",
    "Simple+ideas+to+decorate+my+home",
    "Write+a+news+story+about+the+first+human+to+land+on+mars",
    "Develop+rules+for+a+game+that+combines+monopoly+and+chess",
    "Write+a+song+about+a+snake+and+a+mouse+that+are+friends+Eminem+style",
    "Act+as+a+linux+terminal.+I+will+type+commands+and+you+will+reply+with+what+the+terminal+should+show",
    "What+are+the+best+books+to+read+about+technology",
  ];

  const index = Math.floor(Math.random() * 100) % queries.length;

  const { domain, shouldOpenNewTab } = req
  
  if (domain === "linkchat") {  
    chrome.tabs.create({
      url: "https://you.com/search?q=" + queries[index] + "&tbm=youchat",
    });
  } else if (domain === "linkwrite") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40write" });
  } else if (domain === "linkcode") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40code" });
  } else if (domain === "linkdraw") {
    chrome.tabs.create({ url: "https://you.com/search?q=%40draw" });
  } else if (domain === "code") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_1"],
      disableRulesetIds: ["ruleset_2", "ruleset_3", "ruleset_4"],
    });
    if (shouldOpenNewTab) {
      chrome.tabs.create({ url: "https://code.you.com/" });
    }
  } else if (domain === "youchat") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_3"],
      disableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_4"],
    });
    if (shouldOpenNewTab) {
      chrome.tabs.create({
        url: "https://you.com/search?q=" + queries[index] + "&tbm=youchat",
      });
    }
  } else if (domain === "google") {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_4"],
      disableRulesetIds: ["ruleset_1", "ruleset_2", "ruleset_3"],
    });
    if (shouldOpenNewTab) {
      chrome.tabs.create({ url: "https://www.google.com/" });
    }
    
  } else {
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_2"],
      disableRulesetIds: ["ruleset_1", "ruleset_3", "ruleset_4"],
    });
    if (shouldOpenNewTab) {
      chrome.tabs.create({ url: "https://you.com/" });
    }
  }
});

chrome.runtime.setUninstallURL("https://about.you.com/exit-survey");

// https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled
chrome.runtime.onInstalled.addListener((reason) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ active: true, url: "https://about.you.com/welcome/" });
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
