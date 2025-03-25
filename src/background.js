chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === 'install') {
        chrome.tabs.create({ url: "https://www.extension.tools/leet-speak-translator" });
    }
});

const UNINSTALL_URL = "https://www.extension.tools/leet-uninstall";
chrome.runtime.setUninstallURL(UNINSTALL_URL);
