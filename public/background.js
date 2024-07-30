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

  const { shouldOpenNewTab } = req;

  if (shouldOpenNewTab) {
    chrome.tabs.create({
      url: "https://you.com/search?q=" + queries[index] + "&tbm=youchat",
    });
  }
});

chrome.runtime.setUninstallURL("https://about.you.com/exit-survey");

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
