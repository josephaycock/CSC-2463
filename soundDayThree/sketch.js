let synth = new Tone.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

// check to see if you have to initate the bend or not
bend.pitch = 0;

synth.connect(bend);
bend.toDestination();

function setup() {
  createCanvas(400, 400);

  pitchSlider = createSlider(0, 12, 0, 1);
  pitchSlider.position(20, 40);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());
}

// except letter names you can write numbers (if wanted)
let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function keyPressed() {
  let playNotes = notes[key];
  // this is for no matter if you hold it or not it will end the note (the comment below)
  // synth.triggerAttackRelease(playNotes, 0.2);
  synth.triggerAttack(playNotes);
}

function keyReleased() {
  let playNotes = notes[key];
  synth.triggerRelease(playNotes, '+0.3');
}

function draw() {
  background(100, 220, 150);
  text('Press a key to play a note', 20, 20);
}
