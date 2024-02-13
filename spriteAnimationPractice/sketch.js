// Define sprite
let sprite;

function setup() {
  createCanvas(400, 400);
  // Create sprite
  sprite = new Sprite(200, 200);
  sprite.color = color(255, 0, 0);
}

function draw() {
  background(220);
  sprite.rotation++;
}
