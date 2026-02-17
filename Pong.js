console.log("Pong")

let myCanvas;
let ball, vel

function setup() {
 myCanvas = createCanvas(500, 500);
 myCanvas.parent('gamePanel'); //fix
 ball = createVector(50,250);
 vel = createVector(1,0);
}

 function draw() {
    background(255, 0, 255);

    //PADDEL
    rectMode(CENTER);
    fill(250,0,0);
    stroke(0, 0, 0);
    rect(450, mouseY, 15, 75, 10);

    //BALL
    
    
 }
