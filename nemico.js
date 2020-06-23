// let nemico = document.getElementById('nemico');
// nemico.traverser = false;


var vilain = document.getElementById('nemico'),
  styleVilain = vilain.style,
  vilainX = vilain.offsetLeft,
  vilainY = vilain.offsetTop,
  direction = "right";


  var frame = 0;

  function loop() {
    if (frame === 60) {
      switch (direction) {
        // Up
        case "left":
          if (vilainY > 0 && blockGrid[vilainX][vilainY - 1].traverser)
            vilainY--; // ou y-=40;
          break;
          // Right
        case "right":
          if (vilainX < H_GRID - 1 && blockGrid[vilainX + 1][vilainY].traverser)
            vilainX++;
          break;
          // Down
        case "up":
          if (vilainY < H_GRID - 1 && blockGrid[vilainX][vilainY + 1].traverser)
            vilainY++;
          break;
          // Left
        case "down":
          if (vilainX > 0 && blockGrid[vilainX - 1][vilainY].traverser)
            vilainX--;
          break;
      }
      styleVilain.left = String(vilainX * GRID_SIZE) + 'px';
      styleVilain.top = String(vilainY * GRID_SIZE) + 'px';

      let random = random100();

      if (random < 25) {
        direction = "left";
      }

      if (random >= 25 && random < 50) {
        direction = "right";
      }

      if (random >= 50 && random < 75) {
        direction = "up";
      }

      if (random > 75) {
        direction = "down";
      }

      frame = 0;
    }

    frame++;
    window.requestAnimationFrame(loop);
  }
  // 60 x / seconde
  window.requestAnimationFrame(loop);
