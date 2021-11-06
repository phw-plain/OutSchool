// 마우스 chracter
const character = document.querySelector(".character");

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    character.style.left = mouseX + 'px';
    character.style.top = mouseY + 'px';
});