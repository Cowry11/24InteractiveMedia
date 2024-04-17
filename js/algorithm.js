let roll1=1;
let roll2=2;
let counter=0;
let endGame;
function setup() {
  createCanvas(1950, 1250);
  canvas1 = createGraphics(1950, 400);
  canvas2 = createGraphics(1950, 850);  //This coding references from https://editor.p5js.org/tinywitchdraws/sketches/teb1ToSEZ
  rectMode(CENTER)
  endGame=false;
  angleMode(DEGREES);
}

function draw() {
  canvas1.background(225);
  canvas2.background(209,137,196);
  image(canvas1, 0, 0);
  image(canvas2, 0, 400);
  dice1(600,200,roll1)
  dice2(1200,200,roll2)
  textSize(30)
  fill(0);
  if(roll1<6){
    for (var a=0; a<=1; a++){
    let x=random(width);     
    let y=random(height);
    fill(169,0,180)
    rect(x,y,50,50)
    fill(0)
    text("Click to Roll the Dice",70,50)
    text("Roll1<6!",80,100)
    }
  }
  else if(roll1>roll2){
    for (var b=0; b<=1; b++){
    let x=random(width);     
    let y=random(height);
    fill(255,11,11)
    rect(x,y,30,100);
    fill(0)
    text("Continue Click",70,50)
    text("Roll1>Roll2!",80,100)
    }
  }
  else if(roll2>10)
  {
    for (var i=0; i<=20; i++){
    let x=random(width);     
    let y=random(height);
    fill(255,246,0)
    ellipse(x,y,20,20)
    ellipse(x-15,y+5,20,20)
    ellipse(x-25,y-5,20,20)
    ellipse(x-17,y-20,20,20)  //This flower coding references from https://editor.p5js.org/katiejliu/sketches/Je9G3c5z9
    ellipse(x,y-15,20,20) 
    fill(0)
    text("Keep Going",70,50)
    text("Roll2>10!",80,100)
    counter=0
    endGame=true
    }
  }else{
    text("Counter ="+counter,130,350)
    text("Game Over - Click to Restart",70,50)
    endGame=false
  }
       
  }

// below coding reference from https://www.youtube.com/watch?v=0_7Ihr2vYc8&t=392s
function dice1(diceX,diceY,roll1){
  textSize(70)
  if (roll1==1){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("1",diceX-21,diceY+25)
}
  if (roll1==2){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("2",diceX-21,diceY+25)
}
  if (roll1==3){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("3",diceX-21,diceY+25)
}
  if (roll1==4){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("4",diceX-21,diceY+25)
}
  if (roll1==5){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("5",diceX-21,diceY+25)
}
  if (roll1==6){
  noStroke( ) 
  fill(97,207,232)
  rect(diceX,diceY,200,200)
  noStroke( )
  fill(255)
  text("6",diceX-21,diceY+25)
}
}

function dice2(diceX,diceY,roll2){
  textSize(70)
  if (roll2==1){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);     //This coding references from https://www.youtube.com/watch?v=76fiD5DvzeQ&t=264s
  noStroke( )
  fill(255)
  text("1",diceX-21,diceY+25)
}
  if (roll2==2){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("2",diceX-21,diceY+25)
}
  if (roll2==3){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("3",diceX-21,diceY+25)
}
  if (roll2==4){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("4",diceX-21,diceY+25)
}
  if (roll2==5){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("5",diceX-21,diceY+25)
}
  if (roll2==6){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("6",diceX-21,diceY+25)
}
  if (roll2==7){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("7",diceX-21,diceY+25)
}
  if (roll2==8){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("8",diceX-21,diceY+25)
}
  if (roll2==9){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("9",diceX-21,diceY+25)
}
  if (roll2==10){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("10",diceX-39,diceY+25)
}
  if (roll2==11){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("11",diceX-39,diceY+25)
}
  if (roll2==12){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("12",diceX-39,diceY+25)
}
  if (roll2==13){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("13",diceX-39,diceY+25)
}
  if (roll2==14){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("14",diceX-39,diceY+25)
}
  if (roll2==15){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("15",diceX-39,diceY+25)
}
  if (roll2==16){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("16",diceX-39,diceY+25)
}
  if (roll2==17){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("17",diceX-39,diceY+25)
}
  if (roll2==18){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("18",diceX-39,diceY+25)
}
  if (roll2==19){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("19",diceX-39,diceY+25)
}
  if (roll2==20){
  noStroke( ) 
  fill(235,123,30)
  beginShape();
  let spacing = 60;
  for (let a = 0; a < 360; a+=spacing) {
    let x = 120 * sin(a) + 1200;
    let y = 120 * cos(a) + 200;
    vertex(x, y);
  }
  endShape(CLOSE);
  noStroke( )
  fill(255)
  text("20",diceX-39,diceY+25)
}
}

function mouseReleased()
{
  roll1=int(random(1,7))
  roll2=int(random(1,21))
}
function mouseClicked()
{
  counter+=1
}