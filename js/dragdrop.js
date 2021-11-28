dragitem.onmousedown = function(event) {

    let shiftX = event.clientX - dragitem.getBoundingClientRect().left;
    let shiftY = event.clientY - dragitem.getBoundingClientRect().top;

    dragitem.style.position = 'absolute';
    dragitem.style.zIndex = 1000;
    document.body.append(dragitem);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      dragitem.style.left = pageX - shiftX + 'px';
      dragitem.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    dragitem.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      dragitem.onmouseup = null;
    };

};

dragitem.ondragstart = function() {
    return false;
};