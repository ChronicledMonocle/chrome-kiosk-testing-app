function resizeWebviews() {
  var webviewResize = document.querySelector("webview");
  webviewResize.style.height = document.documentElement.clientHeight + "px";
  webviewResize.style.width = document.documentElement.clientWidth + "px";
};


//window.onload = resizeWebviews;
window.onresize = resizeWebviews;
