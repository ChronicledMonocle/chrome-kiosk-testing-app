chrome.app.runtime.onLaunched.addListener(function () {

  chrome.app.window.create(
        'window.html',
        {
          id: "mainwin",
          state: "fullscreen",
          alwaysOnTop: true
        },

        function (NWLoader) {

          NWLoader.contentWindow.onload = function () {

                console.log(NWLoader);

                var closebutton = NWLoader.contentWindow.document.querySelector('#close');

                //Close event
                closebutton.addEventListener('click',function (e) {
                  console.info("Close window event triggered!");
                  e.view.close();
                });

                var restartbutton = NWLoader.contentWindow.document.querySelector('#restart');

                //Restart event
                restartbutton.addEventListener('click',function (e) {
                  console.info("Restart event triggered!");
                  chrome.runtime.restart();
                });

                var webviewNW = NWLoader.contentWindow.document.querySelector('#testframe');

                webviewNW.addEventListener('newwindow', function (e) {

                  //This is a built in function to disable the blocking of new window events and set a "timer" for the garbage collector to "clean up" after a period of time.
                  e.preventDefault();

                  // e.targetUrl contains the target URL of the original link click
                  // or window.open() call: use it to open your own window to it.

                  //Test to make sure the call is working
                  //window.open(e.targetUrl);

                  webviewNW.getAttributeNode("src").value = e.targetUrl;
                });
            };
        }
    );
});
