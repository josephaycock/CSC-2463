// Define sprite
let sprite;
// Character array
let characters = [];

// Define preLoad
function preload() {
  // Define animation
  let animations = {
    stand: { row: 0, frames: 1 },
    walkRight: { row: 0, columns: 1, frames: 8 },
    walkUp: { row: 5, frames: 6 },
    walkDown: { row: 5, col: 6, frames: 6}
  };

  characters.push(new Character(100, 100, 80, 80, 'assets/cyclops.png', animations));
  characters.push(new Character(200, 200, 80, 80, 'assets/cyclops.png', animations));
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // forEach loop
  characters.forEach((characters) => {
    // Key press
    if (kb.pressing('d')) {
      characters.walkRight();
    } else if (kb.pressing('a')) {
      characters.walkLeft();
    } else if (kb.pressing('w')) {
      characters.walkUp();
    } else if (kb.pressing('s')) {
      characters.walkDown();
    } else {
      characters.stop();
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
  });
}

// Character class
class Character {
  constructor(x, y, width, height, spriteSheet, animations) {
    // Create sprite
    this.sprite = new Sprite(x, y, width, height);
    // Load sprite sheet
    this.sprite.spriteSheet = 'assets/cyclops.png';
    // Set frame delay
    this.sprite.anis.frameDelay = 8;
    // Add animation
    this.sprite.addAnis(animations);
    // Initialize sprite animation
    this.sprite.changeAni('walkRight');
  };

  // walkRight function
  walkRight() {
    this.sprite.vel.x = 1;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('walkRight');
    // Flip sprite
    this.sprite.scale.x = 1;
  }

  // walkLeft function
  walkLeft() {
    this.sprite.vel.x = -1;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('walkRight');
    // Flip sprite
    this.sprite.scale.x = -1;
  }

  // walkUp function
  walkUp() {
    this.sprite.vel.y = -1;
    this.sprite.vel.x = 0;
    this.sprite.changeAni('walkUp');
  }

  // walkDown function
  walkDown() {
    this.sprite.vel.y = 1;
    this.sprite.vel.x = 0;
    this.sprite.changeAni('walkDown');
  }

  stop() {
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
    this.sprite.changeAni('stand');
  }
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