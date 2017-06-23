function updateWebviews() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
};

function newwindowStrip() {
  webview.InjectionItems(file "stripper.js");
};

window.onload = newwindowStrip;
window.onload = updateWebviews;
window.onresize = updateWebviews;
