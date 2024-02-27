// find four sounds and add them to the players object
let sounds = new Tone.Players({

});

let buttonOne, buttonTwo, buttonThree, buttonFour;

let crusher = new Tone.BitCrusher(4); // change parameters
let freeverb = new Tone.Freeverb(); // add parameters i think
let feedbackDelay = new Tone.FeedbackDelay("8n", 0.5); // change paratmeters
let cheby = new Tone.Chebyshev(50); // change parameters

let crusherSlider, freeverbSlider, feedbackDelaySlider, chebySlider;

sounds.connect(crusher);
crusher.connect(freeverb);
freeverb.connect(feedbackDelay);
cheby.toDestination();

function setup() {
  createCanvas(400, 400);

  // see if you can fix the repetition of the code below
  buttonOne = createButton(''); // insert sounds name
  buttonOne.position(); // insert parameters
  buttonOne.mousePressed(() => sounds.player('').start()); // insert sounds name

  buttonTwo = createButton(''); // insert sounds name
  buttonTwo.position(); // insert parameters
  buttonTwo.mousePressed(() => sounds.player('').start()); // insert sounds name

  buttonThree = createButton(''); // insert sounds name
  buttonThree.position(); // insert parameters
  buttonThree.mousePressed(() => sounds.player('').start()); // insert sounds name

  buttonFour = createButton(''); // insert sounds name
  buttonFour.position(); // insert parameters
  buttonFour.mousePressed(() => sounds.player('').start()); // insert sounds name

  // see if you can fix the repetition of the code below
  crusherSlider = createSlider(); // insert parameters for slider
  crusherSlider.position(); // insert parameters
  crusherSlider.mouseMoved(() => crusher.bits.value = crusherSlider.value());

  freeverbSlider = createSlider(); // insert parameters for slider
  freeverbSlider.position(); // insert parameters
  freeverbSlider.mouseMoved(() => freeverb.roomSize.value = freeverbSlider.value());

  feedbackDelaySlider = createSlider(); // insert parameters for slider
  feedbackDelaySlider = position(); // insert parameters for position
  feedbackDelaySlider.mouseMoved(() => feedbackDelay.delayTime.value = feedbackDelaySlider.value());

  chebySlider = createSlider(); // insert parameters for slider
  chebySlider.position(); // insert parameters for position
  chebySlider.mouseMoved(() => cheby.order.value = chebySlider.value());

}

function draw() {
  background(220);
}
