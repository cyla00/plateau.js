
var pion = document.getElementById('pion'),
x = pion.offsetLeft,
y = pion.offsetTop;

document.onkeydown = function(){
  var event = event || window.event,
  tasti_keyboard = event.keyCode;
  switch(tasti_keyboard) {
    case 38: // touche "Flèche Haut"
      if (y > 0 && blocGrid[x / GRID_SIZE][y / GRID_SIZE -1].traverser)
      y = y - GRID_SIZE;
      break;

    case 39: // touche "Flèche Droite"
      if (x < WINDOW_WIDTH && blocGrid[x / GRID_SIZE +1][y / GRID_SIZE].traverser)
      x = x + GRID_SIZE;
      break;

    case 40: // touche "Flèche Bas"
      if (y < WINDOW_HEIGHT && blocGrid[x / GRID_SIZE][y / GRID_SIZE +1].traverser)
      y = y + GRID_SIZE;
      break;

    case 37: // touche "Flèche Gauche"
      if (x > 0 && blocGrid[x / GRID_SIZE -1][y / GRID_SIZE].traverser)
      x = x - GRID_SIZE;
      break;
    }
      pion.style.left = String(x) + 'px';
      pion.style.top = String(y) + 'px';
    }
