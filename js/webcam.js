let vid; 
var word = "reflexive!"
var wordLength = word.length;
var symbol = "!";

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(251,0,0);
  vid = createCapture(VIDEO);
  vid.size(700,500);
  vid.hide();
}

function draw() {
  image(vid,500,260,700,500)
  filter(POSTERIZE, 3);
  var stepX = map(mouseX, 0, width, 0, (width - 50) / word.length);
  var stepY = map(mouseY, 0, height, (-height / 2) / word.length, height / 2 / word.length);
  for (var i = 0; i < word.length; i++) {
    textSize(20 + i * 20);
    fill(100 - i * 20, 180);
    var shake = 0;
    if (mouseIsPressed) {
      shake = random(-10, -8);
    }
    text(word[i], 50 + i * stepX + shake, height / 2 + i * stepY + shake);
  }
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      word += symbol;      
    } else if (keyCode == LEFT_ARROW) {
      if (word.length > wordLength) {
        word = word.slice(0, word.length - 1);
      }      
    } 
}
}