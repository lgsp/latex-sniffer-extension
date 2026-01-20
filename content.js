const highlightLatex = () => {
  // 1. Find all text on the page
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  const regex = /\$([^$]+)\$/g; // Still looks for $...$ for your local tests

  while (node = walker.nextNode()) {
    // Avoid re-processing nodes we already highlighted
    if (node.parentElement.classList.contains('lgsp-highlight')) continue;

    if (node.nodeValue.match(regex)) {
      const span = document.createElement('span');
      span.className = 'lgsp-highlight';
      span.style.backgroundColor = 'yellow';
      span.style.border = '1px solid orange';
      
      // Surgical replacement: keeps the original structure safe
      span.textContent = node.nodeValue; 
      node.parentNode.replaceChild(span, node);
    }
  }

  // 2. Wikipedia specific: Highlight their math tags too!
  document.querySelectorAll('.mwe-math-element').forEach(el => {
    el.style.border = '3px solid yellow';
  });
};

// The Watcher: Runs the function whenever the page content changes
const observer = new MutationObserver(() => {
  highlightLatex();
});

observer.observe(document.body, { childList: true, subtree: true });

// Run immediately on load
highlightLatex();