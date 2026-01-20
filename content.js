{
  "manifest_version": 3,
  "name": "Quick LaTeX Sniffer",
  "version": "1.1",
  "description": "Scans the page for LaTeX patterns.",
  "permissions": ["activeTab"],
  "action": {
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}