const H_GRID = 20;
const V_GRID = 20;
const GRID_SIZE = 40;

const WINDOW_WIDTH = H_GRID * GRID_SIZE;
const WINDOW_HEIGHT = V_GRID * GRID_SIZE;

let plateau = document.getElementById('plateau');
plateau.style.width = WINDOW_WIDTH + "px";
plateau.style.height = WINDOW_HEIGHT + "px";
plateau.style.border = "5px solid";
plateau.style.borderColor = "#ccff66";

var blocGrid = [];
for(var i = 0; i < H_GRID; i++){
  blocGrid.push([]);
  for(var j = 0; j < V_GRID; j++){

    let bloc = document.createElement("div");
    bloc.style.width = "40px";
    bloc.style.height = "40px";
    bloc.style.display = "flex";
    bloc.style.position = "absolute";
    bloc.style.backgroundRepeat = "no-repeat";
    bloc.style.backgroundSize = "contain";
    bloc.style.backgroundPosition = "center";

    if (random100() > 80){
      bloc.style.backgroundColor = "#339966";
      bloc.style.backgroundSize = "contain";
      bloc.traverser = false;
    }
    else if (random100() > 50 && random100() <= 80 ) {
      bloc.style.backgroundColor = "#333333";
      bloc.traverser = false;
    }
    else {
      bloc.style.backgroundColor = "#737373";
      bloc.traverser = true;
    }

    bloc.style.marginLeft = (i * GRID_SIZE) +"px";
    bloc.style.marginTop = (j * GRID_SIZE) +"px";

    document.getElementById("plateau").appendChild(bloc);
    blocGrid[i].push(bloc);
  }
}

blocGrid[0][0].style.backgroundColor = "#cc8800";
blocGrid[0][0].traverser = true;
blocGrid[1][0].style.backgroundColor = "#cc8800";
blocGrid[1][0].traverser = true;
blocGrid[0][1].style.backgroundColor = "#cc8800";
blocGrid[0][1].traverser = true;
blocGrid[1][1].style.backgroundColor = "#cc8800";
blocGrid[1][1].traverser = true;

blocGrid[H_GRID - 1][0].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 1][0].traverser = true;
blocGrid[H_GRID - 1][1].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 1][1].traverser = true;
blocGrid[H_GRID - 2][1].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 2][1].traverser = true;
blocGrid[H_GRID - 2][0].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 2][0].traverser = true;

blocGrid[H_GRID - 1][V_GRID - 1].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 1][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 1][V_GRID - 2].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 1][V_GRID - 2].traverser = true;
blocGrid[H_GRID - 2][V_GRID - 1].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 2][V_GRID - 1].traverser = true;
blocGrid[H_GRID - 2][V_GRID - 2].style.backgroundColor = "#cc8800";
blocGrid[H_GRID - 2][V_GRID - 2].traverser = true;

blocGrid[0][V_GRID - 1].style.backgroundColor = "#cc8800";
blocGrid[0][V_GRID - 1].traverser = true;
blocGrid[0][V_GRID - 2].style.backgroundColor = "#cc8800";
blocGrid[0][V_GRID - 2].traverser = true;
blocGrid[1][V_GRID - 1].style.backgroundColor = "#cc8800";
blocGrid[1][V_GRID - 1].traverser = true;
blocGrid[1][V_GRID - 2].style.backgroundColor = "#cc8800";
blocGrid[1][V_GRID - 2].traverser = true;


function random100() {
  return Math.floor(Math.random() * 100);
}
