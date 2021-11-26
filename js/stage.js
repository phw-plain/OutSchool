const door = new Audio()
door.src = "../mp3/door.mp3"
door.play()
function die(){
    location.href="../GameOver.html"
}

function nextstage(stage){
	location.href=`stage${stage}.html`
}