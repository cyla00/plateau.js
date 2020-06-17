const plateau = document.querySelector('.plateau');
const quadrato = document.querySelector('.quadrato');
let moveBy = 10;


window.addEventListener('load', () => {
    quadrato.style.position = 'absolute';
    quadrato.style.left = 0;
    quadrato.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            quadrato.style.left = parseInt(quadrato.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            quadrato.style.left = parseInt(quadrato.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            quadrato.style.top = parseInt(quadrato.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            quadrato.style.top = parseInt(quadrato.style.top) + moveBy + 'px';
            break;
    }
});
