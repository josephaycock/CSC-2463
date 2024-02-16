let score = 0;
let timeRemaining = 30;
let gameFinish = false;
let gameFont;
let sprite;
let bugs = [];

function preLoad() {
  gameFont = loadFont('assets/PressStart2P-Regular.ttf');
  let animations = {

  };
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function gamePlaying() {

}

function gameOver() {

}

class Bug {
  constructor(x, y, width, height, spriteSheet, animations) {

  }

  walkRight() {

  }

  walkLeft() {

  }

  walkUp() {

  }

  walkDown() {

  }
}