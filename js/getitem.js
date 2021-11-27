let check = 0
let stage

const click = new Audio(); 
click.src = "../mp3/item.mp3"; 

function itemcheck() {
    let wp = document.body.querySelector('#wastepaper')
    let X = wp.style.left;
    let Y = wp.style.top;
    X = X.replace('/[^0-9]/g','');
    Y = Y.replace('/[^0-9]/g','');
    if(X < '360' && Y > '600'){
    	document.body.querySelector('.talk_txt').innerText = '고마워!!'
        open_box(3)
        wp.style.display = 'none';
    }
}

function open_box(position) {
    if(check == 0){
        stage = position
        click.play()
        if(stage == 5){
            document.body.querySelector('.box').src = '../icon/open_box.png'
        }
        document.body.querySelector('.getitem').style.display = "block"
        document.body.querySelector('.interaction').style.display = "block"
    }
}
       
function getitem(){
    check = 1
    document.body.querySelector('.getitem').style.display = 'none'
    document.body.querySelector('.interaction').style.display = 'none'
    document.body.querySelector('.box').onmouseover = ""
}
function checkkey(){
    if(check == 1) nextstage(stage+1)
}