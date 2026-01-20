// This script runs automatically on every page
const findAndHighlightLatex = () => {
  const regex = /\$([^$]+)\$/g; // Matches anything between two $ signs
  document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
    return `<span style="background-color: yellow; border: 1px solid orange;">${match}</span>`;
  });
};

// Run it when the page finishes loading
window.addEventListener('load', findAndHighlightLatex);