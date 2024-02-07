let selectedColor;
let colorPallete;
let dragging = false;

function setup() {
  createCanvas(1000, 800);
  colorPallete = [
    new ColorPallete(10,10, color('red')),
    new ColorPallete(10,35, color('orange')),
    new ColorPallete(10,60, color('yellow')),
    new ColorPallete(10,85, color('green')),
    new ColorPallete(10,110, color('cyan')),
    new ColorPallete(10,135, color('blue')),
    new ColorPallete(10,160, color('magenta')),
    new ColorPallete(10,185, color('#503C3C')),
    new ColorPallete(10,210, color('white')),
    new ColorPallete(10,235, color('black'))
  ];
}

function draw() {
  //background(220);

  for (let i=0; i < colorPallete.length; i++) {
    colorPallete[i].draw();
  }
}

function mousePressed() {
  for (let i=0; i < colorPallete.length; i++) {
    if (colorPallete[i].contains(mouseX, mouseY)) {
      selectedColor = colorPallete[i].fill;
      break;
    }
  }
}

function mouseDragged() {
  if (mouseX > 30 && mouseY > 30) {
    dragging = true;
    fill(selectedColor);
    stroke(selectedColor);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY); 
  }
}

class ColorPallete {
  constructor(x,y,fill) {
    this.x = x;
    this.y = y;
    this.fill = fill;
  }

  draw() {
    fill(this.fill);
    stroke(0);
    strokeWeight(1);
    square(this.x, this.y, 20);
  }

  contains(x,y) {
    return x > this.x && x < this.x + 20 && y > this.y && y < this.y + 20;
  }
}