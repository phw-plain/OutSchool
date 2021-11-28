let check = 0
let stage
let score1 = Math.floor((Math.random() * 5) + 1), score2 = Math.floor((Math.random() * 6) + 10)

const click = new Audio(); 
click.src = "../mp3/item.mp3";

function itemcheck(x1 = 0, x2 = 0, y1 = 0, y2 = 0, position) {
    let wp = document.body.querySelector('#dragitem')
    let X = wp.style.left;
    let Y = wp.style.top;
    X = X.replace(/[^0-9]/g, "");
    Y = Y.replace(/[^0-9]/g, "");
    console.log(X > x1 && X < x2 && Y > y1 && Y < y2)
    if(X > x1 && X < x2 && Y > y1 && Y < y2){
        if(position == 3)
            document.body.querySelector('.talk_txt').innerText = '고마워!!'
        if(position == 9){
            if(X < 500) {
                score1++
            } else {
                score2++
            }
            const s1 = document.querySelector('#score1');
            const s2 = document.querySelector('#score2');
            s1.innerHTML = `${score1<10 ? `0${score1}`:score1}`
            s2.innerHTML = `${score2<10 ? `0${score2}`:score2}`
            const ball = document.querySelector('.ball');
            ball.style.top = '730px'
            ball.style.left = '940px'
        } else {
            open_box(position)
            wp.style.display = 'none';
        }
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

function victory(){
    if(score1 > score2) {
        open_box(9)
    } else {
        die()
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