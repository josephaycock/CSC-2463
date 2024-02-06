let selectedColor;
let colorPallete;

function setup() {
  createCanvas(400, 400);
  colorPallete = [
    new ColorPallete(10,10, color('red')),
    new ColorPallete(10,30, color('orange')),
    new ColorPallete(10,50, color('yellow')),
    new ColorPallete(10,70, color('green')),
    new ColorPallete(10,90, color('cyan')),
    new ColorPallete(10,110, color('blue')),
    new ColorPallete(10,130, color('magenta')),
    new ColorPallete(10,150, color('brown')),
    new ColorPallete(10,170, color('white')),
    new ColorPallete(10,190, color('black'))
  ];
}

function draw() {
  background(220);

  for (let i=0; i < colorPallete.length; i++) {
    colorPallete[i].draw();
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
    square(this.x, this.y, 20);
  }
}