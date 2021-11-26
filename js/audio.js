// Audio 객체 설정 
const player = new Audio(); 
player.src = "mp3/mainbgm.mp3"; 
player.loop = true;

// 오디오 재생: 크롬브라우저에서 작동 안함 
player.play();

function btnplayer(){
	const btnplayer = new Audio(); 
	btnplayer.src = "mp3/button1.mp3"; 
	btnplayer.play();
}