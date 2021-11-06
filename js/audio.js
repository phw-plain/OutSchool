// Audio 객체 설정 
const player = new Audio(); 
player.src = "mp3/mainbgm.mp3"; 
player.loop = true;

// 오디오 재생: 크롬브라우저에서 작동 안함 
player.play();

const bgmPlay = document.getElementById("bgmPlay"); 
const bgmStop = document.getElementById("bgmStop");

 // 재생 버튼
bgmStop.onclick = function () { 
    bgmPlay.style.display = 'block';
    bgmStop.style.display = 'none';
    // 임시 추가
    // document.body.querySelector('.main').style.display = "none";
    player.play();
}
// 정지 버튼 
bgmPlay.onclick = function () { 
    bgmPlay.style.display = 'none';
    bgmStop.style.display = 'block';
    player.pause();
    player.currentTime = 0; 
}