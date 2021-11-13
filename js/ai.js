var x1 = 1600;
var x2 = 10;
var step1 = 20;
var step2 = 20;
var st;
var autoBt;
var ai1;
var ai2;

function init(){
    autoBt = document.getElementById("autoBt");
    ai1 = document.getElementById("ai1");
    ai2 = document.getElementById("ai2");
    ai3 = document.getElementById("ai3");
    moveAuto()
}

function manual(){
    x2 += step2;
    step1=(x1>=1600 || x1 <= 10)? -step1:step1;
    step2=(x2>=1600 || x2 <= 10)? -step2:step2;
    x1 += step1;
    ai1.style.left = x1+"px";
    ai2.style.left = x2+"px";
    ai3.style.left = x1+"px";
}

function moveAuto(){
    st=setInterval("manual()",50);
    autoBt.disabled = true;
}