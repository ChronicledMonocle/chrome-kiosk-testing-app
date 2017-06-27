chrome.app.runtime.onLaunched.addListener(function () {

  chrome.app.window.create(
        'window.html',

        {
            //'outerBounds': { 'width': 1024,'height': 768 },
           'state': 'maximized'
        },

        function (NWLoader) {

          NWLoader.contentWindow.onload = function () {
                var closebutton = NWLoader.contentWindow.document.querySelector('#close');
                closebutton.addEventListener('click',function (e) {
                  console.info("Close window event triggered!");
                  chrome.app.window.current().close();
                });
                var webviewNW = NWLoader.contentWindow.document.querySelector('#testframe');
                webviewNW.addEventListener('newwindow', function (e) {

                  //This is a built in function to disable the blocking of new window events and set a "timer" for the garbage collector to "clean up" after a period of time.
                  e.preventDefault();

                  // e.targetUrl contains the target URL of the original link click
                  // or window.open() call: use it to open your own window to it.

                  //Test to make sure the call is working
                  window.open(e.targetUrl);

                  //Debug Console output to verify this is executing.  Disable before production.
                  console.info("webviewNW completed executing!");
                });
            };
        }
    );
});
