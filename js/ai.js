var x1 = 1600;
var x2 = 10;
var step1 = 15;
var step2 = 15;
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

    if(x1>=1600 || x1 <= 10){
        step1 = -step1
    } else {
        ai1.classList.add('reverse')
        ai3.classList.add('reverse')
    }
    if(step1 < 0) {
        ai1.classList.remove('reverse')
        ai3.classList.remove('reverse')
    }

    x1 += step1;
    
    if(x2>=1600 || x2 <= 10){
        step2 = -step2
    } else {
        ai2.classList.add('reverse')
    }
    if(step2 < 0) {
        ai2.classList.remove('reverse')
    }

    ai1.style.left = x1+"px";
    ai2.style.left = x2+"px";
    ai3.style.left = x1+"px";
}

function moveAuto(){
    st=setInterval("manual()",50);
    autoBt.disabled = true;
}