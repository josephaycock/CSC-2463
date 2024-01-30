function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  noStroke();
  //Pac-Man
  fill('yellow');
  arc(200, 200, 300, 300, 5 * PI / 4, 3 * PI / 4);
  //Red Ghost (Body)
  fill('red');
  arc(600, 200, 300, 300, 0, 2 * PI);
  rect(450, 200, 300, 150);
  //Red Ghost (Eyes)
  fill('white');
  circle(530, 200, 75);
  circle(670, 200, 75);
  fill('blue');
  circle(530, 200, 50);
  circle(670, 200, 50);
}
