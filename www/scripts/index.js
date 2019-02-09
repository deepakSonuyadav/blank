// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById('result').addEventListener("click", myresult.bind(this), false);


    function myresult() {

        alert("world");
        var first = document.getElementById('1st').value;
        alert(first);
        var second = document.getElementById("2st").value;
        alert(second);
        var op = parseInt(document.getElementById("opt").value);
        alert(op);
        if (op == 0) {
            document.getElementById("display").innerHTML = (parseInt(first) + parseInt(second));
        }
        else if (op = 1) {
            document.getElementById("display").innerHTML = first - second;
        }
        else if (op == 2) {
            document.getElementById("display").innerHTML = first / second;
        }
        else if (op == 3) {
            document.getElementById("display").innerHTML = first * second;

        }

    };
    
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();