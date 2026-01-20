document.getElementById('checkPage').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      // This runs INSIDE the webpage you are looking at
      const bodyText = document.body.innerText;
      const hasLatex = bodyText.includes('$') || bodyText.includes('\\begin');
      alert(hasLatex ? "Latex found on this page!" : "No Latex detected.");
    }
  });
});