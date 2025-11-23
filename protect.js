// protect.js

window.__protectLoaded = true;

(function() {
  const allowedDomain = "llamaisgod.github.io";
  const allowedPath = "/Colourbattle/";

  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;

  // If the script is running on a page outside your site, redirect
  if (currentDomain !== allowedDomain || !currentPath.startsWith(allowedPath)) {
    window.location.href = "https://llamaisgod.github.io/Colourbattle/";
  }
})();
// protect.js
(function() {
  const allowedDomain = "llamaisgod.github.io";
  const allowedPath = "/Colourbattle/";

  const currentDomain = window.location.hostname;
  const currentPath = window.location.pathname;

  // If the script is running on a page outside your site, redirect
  if (currentDomain !== allowedDomain || !currentPath.startsWith(allowedPath)) {
    window.location.href = "https://llamaisgod.github.io/Colourbattle/";
  }
})();
window.addEventListener("load", () => {
    if (!window.__gameLoaded) {
        alert("Missing required file: game.js");
        throw new Error("game.js must be loaded.");
    }
});
