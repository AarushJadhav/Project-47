var player, player_Img;
var obstacle1, obstacle1_Img;
var obstacle2, obstacle2_Img;
var bg_Image;
var ground;

function preload() {
  player_Img = loadAnimation("./images/running_1.png", "./images/running_2.png", "./images/running_3.png", "./images/running_4.png", "./images/running_5.png", "./images/running_6.png");
  obstacle1_Img = loadImage("./images/obstacle_1.png");
  obstacle2_Img = loadImage("./images/obstacle_2.png")
  bg_Image = loadImage("./images/bg_Img.gif");
}

function setup() {
  createCanvas(650, 450);
  
  player = createSprite(100, 300, 40, 40);
  player.addAnimation("running", player_Img);
  player.scale = 0.6;

  ground = createSprite(350, 180);
  ground.addImage("ground",bg_Image);
  ground.scale = 1.5;
}

function draw() {
  background(650);

  if (keyIsDown(UP_ARROW)) {
    this.playerMoving = true;
    player.positionY += 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    this.playerMoving = true;
    player.positionY += -10;
  }

  spawnCactus();
  spawnCone();
  drawSprites();
}

function spawnCactus() {
  if (frameCount % 60 === 0) {
   obstacle1 = createSprite(600, 300, 40, 10);
   obstacle1.y = Math.round(random(10, 400));
   obstacle1.addImage(obstacle1_Img);
   obstacle1.scale = 0.1;
   obstacle1.velocityX = -3;

   obstacle1.depth = ground.depth;
   obstacle1.depth = obstacle1.depth + 1;
  
   player.depth = ground.depth;
   player.depth = player.depth + 1;

   obstacle1.lifetime = 300;
  }
}

function spawnCone() {
  if (frameCount % 60 === 0) {
   obstacle2 = createSprite(400, 150, 40, 10);
   obstacle2.y = Math.round(random(10, 400));
   obstacle2.addImage(obstacle2_Img);
   obstacle2.scale = 0.1;
   obstacle2.velocityX = -3;

   obstacle2.depth = ground.depth;
   obstacle2.depth = obstacle2.depth + 1;
  
   player.depth = ground.depth;
   player.depth = player.depth + 1;

   obstacle2.lifetime = 300;
  }
}
