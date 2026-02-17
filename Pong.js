console.log("Pong")

let myCanvas;

function setup() {
 myCanvas = createCanvas(500, 500);
 myCanvas.parent('gamePanel'); //fix
}
 function draw() {
    background(255, 0, 255);
 }
