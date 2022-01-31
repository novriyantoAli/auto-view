chrome.runtime.onInstalled.addListener(async () => {
    let tab = await chrome.tabs.create({ url: "https://youtube.com" });
});