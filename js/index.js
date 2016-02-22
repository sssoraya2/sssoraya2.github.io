var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=90;
ctx.shadowColor= "#003333";

ctx.fillStyle = "blue";
ctx.fillRect(410,400,210,200);

ctx.fillStyle = "red";
ctx.fillRect(10,10,100,275);

ctx.fillStyle = "magenta";
ctx.fillRect(110,160,100,200);

ctx.fillStyle = "#00ff00";
ctx.fillRect(210,310,100,150);

ctx.fillStyle = "magenta";
ctx.fillRect(310,160,100,200);

ctx.fillStyle = "red";
ctx.fillRect(409,10,100,150);

ctx.fillStyle = "red";
ctx.fillRect(519,10,100,150);

ctx.fillStyle = "magenta";
ctx.fillRect(619,160,100,200);

ctx.fillStyle = "#00ff00";
ctx.fillRect(719,310,100,150);

ctx.fillStyle = "magenta";
ctx.fillRect(819,160,100,200);

ctx.fillStyle = "red";
ctx.fillRect(919,10,100,275);

window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("scream");
    ctx.drawImage(img,10,10);
};

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var x = canvas.width / 6;
      var y = canvas.height / 1 - 10;
      var text = 'Made by Soraya XD';

      context.font = '30pt Calibr';
      context.textAlign = 'center';
      context.fillStyle = 'blue';
      context.fillText(text, x, y);