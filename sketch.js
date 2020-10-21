
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png"       ,"sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(1200,800);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
background("600");
  
  
 if(ground.x<0){
   ground.x=ground.width/2;
    }  

 if(keyDown("space") ) {
   monkey.velocityY = -12;
 }
 monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);   
 if (monkey.isTouching(obstacle)){
   monkey.velocityX = 0 ;
   }  
  

  spawnbanana();
  spawnobstacle();
  drawSprites();
}

function spawnbanana() {
   if (World.frameCount % 80 == 0) { 
     var banana = createSprite(400,200, 10, 10);
    banana.y = Math.round(random(20, 400))
   banana.addImage(bananaImage);
  banana.scale = 0.1
     banana.velocityX = -4;
  }  
}

function spawnobstacle() {
   if (World.frameCount % 80 == 0) { 
 var obstacle = createSprite(400,320, 10, 10);
   obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15
          obstacle.velocityX = -4;
   }

     
  } 

