wastepaper.onmousedown = function(event) {

    let shiftX = event.clientX - wastepaper.getBoundingClientRect().left;
    let shiftY = event.clientY - wastepaper.getBoundingClientRect().top;

    wastepaper.style.position = 'absolute';
    wastepaper.style.zIndex = 1000;
    document.body.append(wastepaper);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      wastepaper.style.left = pageX - shiftX + 'px';
      wastepaper.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    wastepaper.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      wastepaper.onmouseup = null;
    };

};

wastepaper.ondragstart = function() {
    return false;
};