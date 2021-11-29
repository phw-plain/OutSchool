const clock = document.querySelector('.timer');

let minutes = 0
let seconds = 29

let game = true

function getTime(){
    clock.innerHTML = `${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
    if(seconds > 0)
    	seconds--
    else if(minutes > 0){
    	minutes--
    	seconds=59
    } else {
    	if(game == true){
    		game = false
            victory()
    	}
    }
}

function init(){
    setInterval(getTime, 1000);
}