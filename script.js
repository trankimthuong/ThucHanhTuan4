/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function () {
    this.top += this.speed;
    console.log('ok: ' + this.top);
  }

  this.moveLeft = function () {
    this.left -= this.speed;
  }
  this.moveUp = function () {
    this.top -= this.speed;
  }

  this.setSpeed = function (num) {
    this.speed = num;
  }
}

var hero = new Hero('nobita.png', 20, 30, 200,20);

function start(){
  let left = 30;
  let top = 20;
  let right = window.innerWidth - hero.size-left;
  let bot = window.innerHeight - hero.size-top;
  if (hero.left < right && hero.top <= top) {
    hero.moveRight();
  } else if (hero.left >= right && hero.top < bot) {
    hero.moveDown();
  } else if (hero.left > left && hero.top >= bot) {
    hero.moveLeft();
  } else if (hero.left <= left && hero.top > top) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}
hero.setSpeed(100);
start();