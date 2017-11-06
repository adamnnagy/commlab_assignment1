var bg;
var y = 0;

function setup() {
  // bg = loadImage("pics/blackboard.jpg");
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0, 100);
  
}

function draw() {
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 7, 7); 
}

