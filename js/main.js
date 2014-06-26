var WIDTH = 400,
    HEIGHT = 600,
    COIN_RADIUS = 10;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.canvas.width = WIDTH;
context.canvas.height = HEIGHT;
init();

function init(){
  drawCoin(190, 250, COIN_RADIUS);
  drawCoin(90, 350, COIN_RADIUS);
  drawCoin(290, 350, COIN_RADIUS);
}
function drawCoin(x, y, r){
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
}