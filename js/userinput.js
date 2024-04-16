let img;
let img2;

function preload(){
  img=loadImage("girl.png");
  img2=loadImage("girl2.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(255,215,220);
}

function draw(){
  image(img,mouseX,mouseY,150,200)
  if (mouseIsPressed){ 
    image(img2, mouseX, mouseY, 150, 200)
    }
}