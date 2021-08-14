var boy,boy_running,path,invisible_ground1,invisible_ground2,drink;

function preload() {
  boy_running=loadAnimation("Runner-1.png","Runner-2.png")
  pathImage=loadImage("path.png");
  drinkImage=loadImage("energyDrink.png");
}

function setup() {
  createCanvas(400, 400);
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale=1.2;
  boy=createSprite(100,100);
  boy.addAnimation("running",boy_running);
  boy.velocity.x = 1;
  boy.scale=0.1;
  invisible_ground=createSprite(4,222,600,20);
  invisible_ground.visible=false;
  invisible_ground2=createSprite(393,227,600,20);
  invisible_ground2.visible=false;
}

function draw() {
  background(220);
  if(path.y > 400) {
    path.y = height/2;
  }
  // boy.collide(drink);
  // if(boy){
  //   drink.remove();
  // }
  boy.x=mouseX;
  boy.y=mouseY;
  spawndrink();
  drawSprites();
  }

  function spawndrink() {
    if(frameCount%60==0) {
     drink = createSprite(300,200,10,10);
     drink.addImage(drinkImage);
     drink.scale=0.1;
     drink.velocityX= -3;
     drink.y=Math.round(random(10,100));
     drink.depth=boy.depth;
     drink.depth=boy.depth+1;
    }
  }