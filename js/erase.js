var canvas;
var ctx;
var flag = false;

var ready = function(){
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 canvas.onmousedown = drawStart;
 canvas.onmousemove = drawing;
 
 ctx.fillRect(0, 0, 3000, 1700)
}

var drawStart = function(event){
  ctx.beginPath();
  var x = event.target.offsetLeft;
  var y = event.target.offsetTop;
  ctx.moveTo(event.clientX-x, event.clientY-y);
  flag = true;
}

var drawing = function(event){
  if(flag) {
    var x = event.target.offsetLeft;
    var y = event.target.offsetTop;
    ctx.lineCap = 'round'

    ctx.clearRect(event.clientX-x-125, event.clientY-y-125, 250, 250);

    ctx.stroke();
  }
}