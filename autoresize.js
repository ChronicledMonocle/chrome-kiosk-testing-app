

/*/
function newwindowStrip() {
  //webview.InjectionItems(file "stripper.js");
};

window.onload = newwindowStrip;


/**/
//window.onload = updateWebviews;
window.onresize = updateWebviews;

setTimeout(function () {
    console.warn("resize me now dangit");
}, 1000);
