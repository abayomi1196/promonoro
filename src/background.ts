// handle custom event message
chrome.runtime.onMessage.addListener((obj) => {
  const { type, value } = obj;

  if (type === "STARTED" || type === "UPDATED") {
    chrome.action.setBadgeText({
      text: value
    });
  } else if (type === "STOPPED") {
    chrome.action.setBadgeText({
      text: ""
    });
  }

  return true;
});
