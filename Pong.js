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
    strokeWeight(5);
    rect(450, mouseY, 15, 75, 10);

    //BALL
    ball.add(vel);
    if (ball.x > 500) vel.reflect( createVector(-1,0) );
    if (ball.x < 0) vel.reflect( createVector(1,0) );
    if (ball.y > 500) vel.reflect( createVector(0,-1) );
    if (ball.y < 0) vel.reflect( createVector(1,0) );

    if

  
    fill(250,0,0); 
    ellipse(ball.x, ball.y, 20 );
 }
