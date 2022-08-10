chrome.action.on((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: injectedFunction
    });
});