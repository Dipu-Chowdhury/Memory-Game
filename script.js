/// global constants
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.75;  
var guessCounter = 0;
var clueHoldTime = 1000; 
var decreaseHoldTime = 25;
var strikes = 0;


function randomNum() {
  return Math.floor(Math.random()*6)+1; 
}
function getSecretPattern() {
  var index;
  var secret = [];
  for (index=0; index<7; index++) {
    secret.push(randomNum());
  }
  return secret;
}

function startGame(){
    progress = 0;
    gamePlaying = true;
    pattern = getSecretPattern();
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    clueHoldTime = 1000; // reset
}

const freqMap = {
  1: 260,
  2: 300,
  3: 340,
  4: 380,
  5: 420,
  6: 460
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){ stopTone()}, len) }

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    clueHoldTime -= decreaseHoldTime;
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Challenge Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Challenge Over. Congrats! You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){ return; }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){ winGame(); }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{ guessCounter++; }
  }
  else{
    if (strikes != 3) {
      strikes++;
      alert("Wrong Choice! Try that part again. This is Strike #" + strikes)
    }
    if (strikes == 3) {
      clueHoldTime = 1000;
      strikes = 0;
      loseGame();
    }
  }
}    