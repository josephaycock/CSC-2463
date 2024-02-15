let limeSprite;
let goldenSprite;
let redSprite;

function preLoad() {
  // Create Sprite
  limeSprite = new Sprite(200,200, 80, 80);
  goldenSprite = new Sprite(200,200, 80, 80);
  redSprite = new Sprite(200,200, 80, 80);

  // Load Sprite Sheet
  limeSprite.spriteSheet = 'Assets/lime.png';
  goldenSprite.spriteSheet = 'Assets/golden.png';
  redSprite.spriteSheet = 'Assets/red.png';

  // Set Animation
  let animation = {
    stand: { row: 0, frames: 1 },
    walkRight:{},
    walkLeft:{}
  }

  // Set Frame Delay 
  limeSprite.anis.frameDelay = 8;
  goldenSprite.anis.frameDelay = 8;
  redSprite.anis.frameDelay = 8;

  // Adds Animations
  limeSprite.addAnis(animation);
  goldenSprite.addAnis(animation);
  redSprite.addAnis(animation);

  // Initialize Sprite Animation
  limeSprite.changeAni('stand');
  goldenSprite.changeAni('stand');
  redSprite.changeAni('stand');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function walkRight() {

}

function walkLeft() {

}

function stop() {

}

function keyTyped() {
  
}
