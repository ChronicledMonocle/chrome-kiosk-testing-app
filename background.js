chrome.app.runtime.onLaunched.addListener(function () {


    chrome.app.window.create(
        'window.html',

        {
            //'outerBounds': { 'width': 1024,'height': 768 },
           'state': 'maximized'
        },

        function (NWLoader) {

            NWLoader.contentWindow.onload = function () {


                var webviewNW = NWLoader.contentWindow.document.querySelector('#testframe');
                webviewNW.addEventListener('newwindow', function (e) {

                    e.preventDefault();
                    // e.targetUrl contains the target URL of the original link click
                    // or window.open() call: use it to open your own window to it.

                    window.open(e.targetUrl);
                });
            };
        }

    );

});
