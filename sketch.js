var bola;


function setup() {
  createCanvas(400,400);
  bola=createSprite(200,200,30,30);
}


function draw() 
{
  background("yellow");

if (keyIsDown(UP_ARROW)) {
  bola.position.y=bola.position.y-5;
  
}
if (keyIsDown(DOWN_ARROW)) {
  bola.position.y=bola.position.y+5;
}
if (keyIsDown(RIGHT_ARROW)) {
  bola.position.x=bola.position.x+5;
}
if (keyIsDown(LEFT_ARROW)) {
  background("red")

  bola.position.x=bola.position.x-5;
}
  drawSprites();
}




