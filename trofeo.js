const altezza_trofeo = trofeo.style.height = (H_GRID /2) + "px";
const larghezza_trofeo = trofeo.style.width = (V_GRID /2) + "px";

let trofeo = document.createElement('div');
trofeo.style.width = "40px";
trofeo.style.height = "40px";
trofeo.style.display = "flex";
trofeo.style.position = "absolute";
trofeo.style.backgroundImage = "url('img/earth.png')"
trofeo.style.backgroundRepeat = "no-repeat";
trofeo.style.backgroundSize = "cover";
trofeo.style.backgroundPosition = "center";

if(altezza_trofeo && larghezza_trofeo){
  document.getElementById('plateau').appendChild(trofeo);
  blocGrid[i].push(trofeo);
}
