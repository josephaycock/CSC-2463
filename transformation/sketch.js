// Description: This is a simple example of how to load an image in p5.js
// Declared img as a global variable
let pixelVillian;

function preload() {
  // Load the image
  pixelVillian = loadImage('assets/pixelVillian.jpeg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Display the image
  image(pixelVillian, 100, 100);
}