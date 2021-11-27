let lastidx = 1

function select(idx){
	/* 카테고리 up down 변경*/
	document.body.querySelector(`#rule_btn${lastidx}`).classList.add("btn-down")		
	document.body.querySelector(`#rule_btn${lastidx}`).classList.remove("btn-down")
	document.body.querySelector(`#rule_btn${lastidx}`).classList.remove("btn-up")
	document.body.querySelector(`#rule_btn${idx}`).classList.add("btn-up")
	/* 카테고리에 따른 rule 내용 & 디자인 변경 */
	document.body.querySelector(`#rule${lastidx}`).style.display = 'none'
	document.body.querySelector(`#rule${idx}`).style.display = 'block'

	lastidx = idx
}

function gameStart(){
	location.href="stages/stage1.html";
}

function gameRank(){
	location.href="gameRank.html";
}

select(1)