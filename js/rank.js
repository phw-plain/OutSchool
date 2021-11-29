let time = ""
let t_check = 0
window.onload = function() {
	window.parent.postMessage({ hello: '' }, '*');
	clearTime()
};

let keys = localStorage.getItem('keys')
function setScore(){
	ready()
	const name = document.getElementById("name").value

    if(localStorage.getItem(name)==null && name != '' && t_check == 0){
    	t_check++
    	keys.push(name)
    	localStorage.setItem('keys', keys)
        localStorage.setItem(name, time)
   		console.log(`이름 : ${name}, 플레이 타임 : ${time}`)
   		console.log(localStorage.getItem('keys'))
		alert(`정상적으로 기록되었습니다!!`)
    } else if(name == ''){
		alert(`이름을 입력해주세요.`)
    } else if(t_check != 0){
		alert(`이미 점수를 등록하셨습니다.`)
    }
    else {
        alert(`이미 ${name}이 존재합니다. 다른 이름을 입력해 주세요.`)
    }

}

function clearTime(){
	let today = new Date()
	console.log(today)
	let start = localStorage.getItem('start')

	let M = today.getMinutes() - localStorage.getItem('startM')
	let S = today.getSeconds() - localStorage.getItem('startS')

	if(M < 0){
		M += 60
	}
	if(S < 0){
		M -= 1
		S += 60
	}

	console.log(time)
    time += `${M<10 ? `0${M}`:M}:`
    time += `${S<10 ? `0${S}`:S}`
    
    let txt = time.replace(":", "분 ")
    txt += '초'
 	const cleartime = document.querySelector('.cleartime').innerHTML = txt

}

function Rank(){
	ready()
	let scores = new Array()
	for(let i=0; i<keys.length; i++){
		let score = localStorage.getItem(keys[i])
		score = score.split(':')
		score[0] = +score[0]
		score[1] = +score[1]
		scores.push(score[0]*60 + score[1])
	}
	let rank = new Array()
	for(let i=0; i<keys.length; i++){
		let min = 0
		for(let j=0; j<keys.length; j++){
			if(scores[min] > scores[j]) {
				min = j
			}
		}
		scores[min] = 100000
		rank.push(min)
	}
	let len = (rank.length > 10) ? 10 : rank.length
	for(let i=0; i<len; i++){
		console.log(`${i+1}. ${keys[rank[i]]}  ${localStorage.getItem(keys[[rank[i]]])} => ${rank[i]}`)
		document.body.querySelector(`#rank${i+1}_name`).innerText = `${keys[rank[i]]}`
		document.body.querySelector(`#rank${i+1}_time`).innerText = `${localStorage.getItem(keys[[rank[i]]])}`
	}
}

function ready(){
	if(keys == null)
		keys = new Array()
	else if(typeof(keys) == typeof(''))
		keys = keys.split(',')
}