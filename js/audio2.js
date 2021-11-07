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