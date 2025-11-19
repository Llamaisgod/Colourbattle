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