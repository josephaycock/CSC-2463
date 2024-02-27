let soundFX, buttonOne, buttonTwo;

function preload() {
  //This calls back files and plays them
  //Players is nested in Player (supposedly)
  soundFX = new Tone.Players ({
    electronic: "assets/electronic.mp3",
    photograph: "assets/photograph.mp3"
  }).toDestination(); //tells audio to go to speakers
}

function keyPressed() {
  if (key === 'q') {
    soundFX.player("electronic").start();
  } else if (key === 'w') {
    soundFX.player("photograph").start();
  }
}

// Can do it this way
function playOne () {
  soundFX.player ('electronic').start();
}

function playTwo () {
  soundFX.player ('photograph').start();
}

function setup() {
  createCanvas(400, 400);

  // Uncomment the following lines to add buttons
  buttonOne = createButton("Electronic");
  buttonOne.position(100, 300);
  // buttonOne.mousePressed (playOne);
  // In-Line function
  buttonOne.mousePressed (() => soundFX.player ('electronic').start());

  buttonTwo = createButton("Photograph");
  buttonTwo.position(200, 300);
  // buttonTwo.mousePressed (playTwo);
  //In-Line function
  buttonTwo.mousePressed (() => soundFX.player ('photograph').start());
}

function draw() {
  background(220, 100, 200);
  text("Press 'Q' or 'W' to play sound", 100, 200);
}
