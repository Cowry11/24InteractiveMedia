
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

  }
  
  function draw() {
    background(251,255,0);
  
    normalMaterial();
    push();

    push();
    translate(0, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(260, 260, 260);
    pop();

  }
  