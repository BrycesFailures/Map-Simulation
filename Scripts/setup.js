// ~~~~~~~~ Canvas Setup ~~~~~~~~~ //
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 320;
canvas.height = 240;

canvas.style = `position: fixed;top: 50%;left: 50%;margin-top: -120px;margin-left: -160px;image-rendering: pixelated;transform: scale(${screen.height / 240});`;


// ~~~~~~~~ Check if Loaded ~~~~~~~~ //
var checkLoop = setInterval(function() {

  if (document.readyState == "complete") {
    start();
    clearInterval(checkLoop);
  }

},1);
