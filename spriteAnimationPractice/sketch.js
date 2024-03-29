// Define sprite
let sprite;

// Define preLoad
function preload() {
  // Create sprite
  sprite = new Sprite(200, 200, 80, 80);
  // Load sprite sheet
  sprite.spriteSheet = 'assets/cyclops.png';
  // Define animation
  let animation = {
    stand: { row: 0, frames: 1 },
    walkRight: { row: 0, columns: 1, frames: 8 },
    walkUp: { row: 5, frames: 6 },
    walkDown: { row: 5, col: 6, frames: 6}
  };
  // Set frame delay
  sprite.anis.frameDelay = 8;
  // Add animation
  sprite.addAnis(animation);
  // Initialize sprite animation
  sprite.changeAni('walkRight');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Key press
  if (kb.pressing('d')) {
    walkRight();
  } else if (kb.pressing('a')) {
    walkLeft();
  } else if (kb.pressing('w')) {
    walkUp();
  } else if (kb.pressing('s')) {
    walkDown();
  } else {
    stop();
  }

  // Update sprite position
  if (sprite.x + sprite.width/4 > width) {
    walkLeft();
  } else if (sprite.x - sprite.width/4 < 0) {
    walkRight();
  } else if (sprite.y + sprite.height/4 > height) {
    walkUp();
  } else if (sprite.y - sprite.height/4 < 0) {
    walkDown();
  }
}

// walkRight function
function walkRight() {
  sprite.vel.x = 1;
  sprite.vel.y = 0;
  sprite.changeAni('walkRight');
  // Flip sprite
  sprite.scale.x = 1;
}

// walkLeft function
function walkLeft() {
  sprite.vel.x = -1;
  sprite.vel.y = 0;
  sprite.changeAni('walkRight');
  // Flip sprite
  sprite.scale.x = -1;
}

// walkUp function
function walkUp() {
  sprite.vel.y = -1;
  sprite.vel.x = 0;
  sprite.changeAni('walkUp');
}

// walkDown function
function walkDown() {
  sprite.vel.y = 1;
  sprite.vel.x = 0;
  sprite.changeAni('walkDown');
}

function stop() {
  sprite.vel.x = 0;
  sprite.vel.y = 0;
  sprite.changeAni('stand');
}

// Define keyTyped function
function keyTypedOld() {
  switch (key) {
    case 'w':
      walkUp();
      break;
    case 's':
      walkDown();
      break;
    case 'a':
      walkLeft();
      break;
    case 'd':
      walkRight();
      break;
  }
}