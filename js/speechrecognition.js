let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
var runningText;
function setup(){
  background(255);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
 
}
function draw(){

}
function showResult(){
 if (speechRec.resultValue === true) {
   background(255);
   textSize(72);
   fill(195, 0, 255);
   text(speechRec.resultString, 50, height/2);
}
}

function gotSpeech(){
    if(speechRec.resultValue){
       
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
 
  }