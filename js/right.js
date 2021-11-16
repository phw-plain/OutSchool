let autoBlind;

function init(){
    autoBlind = document.body.querySelector('#blind');
    blindAuto()
}

function manual(){
    document.body.classList.add('.blind')
    autoBlind.style.opacity = '1'
    // document.body.querySelector('.character').style.display = 'none';

    setTimeout(function(){
        // document.body.querySelector('.character').style.display = 'block';
        document.body.classList.remove('.blind')
        autoBlind.style.opacity = '0'
    }, 5000);
}

function blindAuto(){
    let st = setInterval("manual()", 10000);
}