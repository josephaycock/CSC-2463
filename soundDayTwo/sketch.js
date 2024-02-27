let sounds = new Tone.Players ({
  'electronic' : "assets/electronic.mp3",
  'photograph' : "assets/photograph.mp3"
});

let delayAmt = new Tone.FeedbackDelay("8n", 0.5); // adding delay object
let distortionAmt = new Tone.Distortion(0.5); // adding distortion object

let buttonOne, buttonTwo;
let delaySlider, feedbackSlider, distortionSlider;

sounds.connect(delayAmt); // connect the players to the delay
delayAmt.connect(distortionAmt); // connect the delay to the distortion
distortionAmt.toDestination(); // connect the distortion to the speakers

function setup() {
  createCanvas(400, 400);

  buttonOne = createButton('electronic');
  buttonOne.position(19, 19);
  buttonOne.mousePressed(() => sounds.player('electronic').start());

  buttonTwo = createButton('photograph');
  buttonTwo.position(19, 50);
  buttonTwo.mousePressed(() => sounds.player('photograph').start());

  // create a slider to control the amount of delay 
  delaySlider = createSlider(0, 1, 0, 0.5);
  delaySlider.position(19, 80);
  // connect the slider to the delay time
  delaySlider.mouseMoved (() => delayAmt.delayTime.value = delaySlider.value());

  // create a slider to control the amount of feedback
  feedbackSlider = createSlider(0, 0.9, 0, 0.05);
  feedbackSlider.position(19, 110);
  // connect the slider to the feedback amount
  feedbackSlider.mouseMoved (() => delayAmt.feedback.value = feedbackSlider.value());

  // create a slider to control the amount of distortion
  distortionSlider = createSlider(0, 0.9, 0, 0.05);
  distortionSlider.position(19, 140);
  // connect the slider to the distortion amount
  distortionSlider.mouseMoved (() => distortionAmt.distortion = distortionSlider.value());
}

function draw() {
  background(220);
}
