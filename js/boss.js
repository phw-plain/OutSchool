let answer =  Math.floor((Math.random() * 3) + 1);
let open1 = 0
let check = 0, check1 = 0
let clear = false

const click = new Audio(); 
click.src = "../mp3/button2.mp3"; 

function btnclick(idx){
	click.play();
	check = idx
	okay()
}

function okay() {
	if(check != 0 && check1 == 0) {
		if(confirm(`${check}번째 방을 선택하시겠습니까?`)){
			for(let i = 1; i<=3; i++){
				if(i != answer && i != check)
					open1 = i;
			}
			check1 = check
			document.body.querySelector(`#door${open1}`).src = `../icon/door${open1}_open.png`
			let btn = document.body.querySelector(`#btn${check}`)
			btn.style.color = "black"
		}
	} else if(open1 == check) {
		alert(`공개된 방 ${open1}은(는) 더 이상 선택할 수 없습니다.`)
	} else if(check == check1) {
		if(confirm(`${check}번째 방으로 선택을 유지하시겠습니까?`)){
			if(check == answer) clear = true
			clearCheck()
		}
	} else if(check != check1) {
		if(confirm(`${check}번째 방으로 선택을 변경하시겠습니까?`)){
			if(check == answer) clear = true
			clearCheck()
		}
	}
}

function clearCheck(){
	if(clear){
		let btn = document.body.querySelector(`#btn${check1}`)
		btn.style.color = "white"

		alert(`정답은 ${answer}!! 당신은 도전에 성공하였습니다.`)
		for(let i=1; i<=3; i++){
			if(i != open1)
				document.body.querySelector(`#door${i}`).src = `../icon/door${i}_open.png`
		}
		document.body.querySelector('.character').classList.remove('hidden')
		document.body.querySelector(`#door${answer}`).setAttribute('onmouseover', 'Clear()')
	} else {
		alert(`정답은 ${answer}!! 당신은 도전에 실패하였습니다.`)
		location.replace("../GameOver.html")
	}
}

function memoOn(){
	document.body.querySelector('.interaction').style.display = "block"
	document.body.querySelector('.memo').style.display = "block"
}

function memoOff(){
	document.body.querySelector('.interaction').style.display = "none"
	document.body.querySelector('.memo').style.display = "none"
}

function Clear(){
	location.replace('../GameClear.html')
}