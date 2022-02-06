const door = new Audio()
door.src = "../mp3/door.mp3"
door.play()
function die(){
    location.replace("../GameOver.html")
}

function nextstage(stage){
	location.replace(`stage${stage}.html`)
}