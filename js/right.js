let autoBlind;
let time = 8000;
function init(){
    autoBlind = document.body.querySelector('#blind');
    blindAuto()
}

function manual(){
    time = 6000;
    document.body.classList.add('.blind')
    document.body.querySelector('.box').style.opacity = '0';
    document.body.querySelector('.obj').style.opacity = '0';
    document.body.querySelector('.obj2').style.opacity = '0';
    autoBlind.style.opacity = '1'
    // document.body.querySelector('.character').style.display = 'none';

    setTimeout(function(){
        // document.body.querySelector('.character').style.display = 'block';
        document.body.querySelector('.box').style.opacity = '1';
        document.body.querySelector('.obj').style.opacity = '1';
        document.body.querySelector('.obj2').style.opacity = '1';
        document.body.classList.remove('.blind')
        autoBlind.style.opacity = '0'
    }, 2000);
}

function blindAuto(){
    let st = setInterval("manual()", time);
}