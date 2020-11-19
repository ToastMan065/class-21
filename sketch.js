var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(120,70,24,100)
    gameObject2 = createSprite(240,55,50,100)
      gameObject3 = createSprite(500,59,61,100)
        gameObject4 = createSprite(700,60,23,102)
        gameObject1.shapeColor = "green"
        gameObject2.shapeColor = "green"
        gameObject3.shapeColor = "green"
        gameObject4.shapeColor = "green"

        movingRect.velocityY = -5;
        gameObject1.velocityY= 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }
  bounceOff(movingRect, gameObject1)
  drawSprites();
}

