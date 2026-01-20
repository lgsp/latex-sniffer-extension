const highlight = () => {
  // We search for text nodes specifically to avoid breaking the HTML structure
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  const regex = /\$([^$]+)\$/g;

  while (node = walker.nextNode()) {
    if (node.nodeValue.match(regex)) {
      const span = document.createElement('span');
      span.innerHTML = node.nodeValue.replace(regex, (match) => {
        return `<span style="background-color: yellow; border: 1px solid orange;">${match}</span>`;
      });
      node.parentNode.replaceChild(span, node);
    }
  }
};

// This is the "Pro" part: Watch the page for ANY changes
const observer = new MutationObserver(() => {
  highlight();
});

observer.observe(document.body, { childList: true, subtree: true });

// Run once at the start
highlight();