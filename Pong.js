console.log("Pong")

let myCanvas;

function setup() {
 myCanvas = createCanvas(500, 500);
 myCanvas.parent('gamePanel'); //fix
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
