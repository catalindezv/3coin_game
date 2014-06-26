function Coin(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.drawCoin = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
  }
  return this;
}

var WIDTH = 400,
    HEIGHT = 600,
    COIN_RADIUS = 10;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var coin1, coin2, coin3;
context.canvas.width = WIDTH;
context.canvas.height = HEIGHT;
init();

function init(){
  coin1 = new Coin(190, 250, COIN_RADIUS);
  coin1.drawCoin();
  coin2 = new Coin(90, 350, COIN_RADIUS);
  coin2.drawCoin();
  coin3 = new Coin(290, 350, COIN_RADIUS);
  coin3.drawCoin();
}

