let xWidth = 0;
let yHeight = 0;

document.querySelector(".golden-outfit").style.transform = 'translate(' + xWidth + 'vw, ' + yHeight + 'vh)'

document.querySelector('body').addEventListener('keydown', function (event) {
    switch(event.key) {
        case 'w':
        case 'ArrowUp':
        case '8':
            movement('up');
            if (yHeight === 0) {
                return;
            } else {
                yHeight = yHeight - 2;
            } 
            break;
        case 'a':
        case 'ArrowLeft':
        case '4':
            movement('left');
            if(xWidth === 0) {
                return
            } else {
                xWidth = xWidth - 2;
            } 
            break;
        case 's':
        case 'ArrowDown':
        case '2':
            movement('down');
            if(yHeight === 90) {
                return
            } else {
                yHeight = yHeight + 2;
            } 
            break;
        case 'd':
        case 'ArrowRight':
        case '6':
            movement('right');
            if (xWidth === 90) {
                return;
            } else {
                xWidth = xWidth + 2;
            } 
            break;
        case 'e':
        case '9':
            movement('right');
            if (xWidth === 90 || yHeight === 0) {
                return;
            } else {
                xWidth = xWidth + 2;
                yHeight = yHeight - 2;
            } 
            break;
        case 'c':
        case '3':
            movement('right');
            if (xWidth === 90 || yHeight === 90) {
                return;
            } else {
                xWidth = xWidth + 2;
                yHeight = yHeight + 2;
            } 
            break;
        case 'q':
        case '7':
            movement('left');
            if (xWidth === 0 || yHeight === 0) {
                return;
            } else {
                xWidth = xWidth - 2;
                yHeight = yHeight - 2;
            } 
            break;
        case 'z':
        case '1':
            movement('left');
            if (xWidth === 0 || yHeight === 90) {
                return;
            } else {
                xWidth = xWidth - 2;
                yHeight = yHeight + 2;
            } 
            break;
    }

    document.querySelector(".golden-outfit").style.transform = 'translate(' + xWidth + 'vw, ' + yHeight + 'vh)'
})

function movement(orientation) {
    if (document.querySelector('.golden-' + orientation).classList.contains('active')) {
        return;
    }

    document.querySelector('.golden.active').classList.remove('active');
    document.querySelector('.golden-' + orientation).classList.add('active');
}