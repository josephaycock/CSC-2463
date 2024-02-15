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

  let animation = {
    stand: { row: 0, frames: 1 }
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
