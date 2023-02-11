let focusMode = false;

function toggleBodyClassName(name) {
  const className = document.body.className;
  if (className.includes(name)) {
    document.body.className = className.replace(name, "");
  } else {
    document.body.className += " " + name;
  }
}

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document
  .getElementById("focus-mode")
  .addEventListener("click", async function () {
    const tab = await getCurrentTab();
    chrome.scripting.executeScript({
      func: toggleBodyClassName,
      args: ["focus-mode"],
      target: { tabId: tab.id },
    });
  });


document
  .getElementById("dark-mode")
  .addEventListener("click", async function () {
    const tab = await getCurrentTab();
    chrome.scripting.executeScript({
      func: toggleBodyClassName,
      args: ["dark-mode"],
      target: { tabId: tab.id },
    });
  });
