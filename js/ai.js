var x1 = 10;
var x2 = 1000;
var step1 = 10;
var step2 = 10;
var st;
var autoBt;
var ai1;
var ai2;

function init(){
    autoBt = document.getElementById("autoBt");
    ai1 = document.getElementById("ai1");
    ai2 = document.getElementById("ai2");
    moveAuto()
}

function manual(){
    x1 += step1;
    step1=(x1>=1000 || x1 <= 10)? -step1:step1;
    step2=(x2>=1000 || x2 <= 10)? -step2:step2;
    x2 += step2;
    ai1.style.left = x1+"px";
    ai2.style.left = x2+"px";
}

function moveAuto(){
    st=setInterval("manual()",50);
    autoBt.disabled = true;
}