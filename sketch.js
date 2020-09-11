var bananaImage;
var obstacleGroup, obstacleImage;

var score;
var backImage, back;
var player,player_running;
var ground;
var foodGroup;


function preload(){
backImage = loadImage("jungle.jpg");
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

bananaImage = loadImage("banana.png");
obstacle_img = loadImage("stone.png");

}

function setup() {
  createCanvas(400, 400);
  back = createSprite(200,200,400,400);
  back.addImage(backImage);
  player = createSprite(50,350,10,10);
  player.addAnimation("running",player_running);
  player.scale=0.15;
  ground = createSprite (0,395,800,10);
  ground.visible = false;
  score = 0;
  obstacleGroup=new Group();
  foodGroup=new Group();
  
  
  back.velocityX=-2;
  back.x=back.width/2;
}

function draw() {
  
background(220);
  if (keyDown("space")) {
 player.velocityY = -12 ;
 
}

player.velocityY = player.velocityY + 0.8;
  player.collide(ground);
  
  if(back.x<0) {
  back.x = back.width/2;
}
  
   if(obstacleGroup.isTouching(player)){
    player.scale = 0.2;
}
  
if(foodGroup.isTouching(player)) {
 score = score + 2;
  foodGroup.destroyEach();
}
  
  switch(score) {
  
      case 10: player.scale = 0.12;
      break;
    
      case 20: player.scale = 0.14;
      break;
      
      case 30: player.scale = 0.16;
      break;
      
      case 40: player.scale = 0.18;
      break;
      
      default: break;
}
  if(obstacleGroup.isTouching(player)) {
    
    
}
  


spawnBanana();
spawnObstacle();


drawSprites();
  
stroke("white");
textSize(20);
fill("white");
text("score: "+ score, 300,50);

}
function spawnBanana()
{
  if(World.frameCount%80===0)
  {
    var banana=createSprite(400,250,20,20);
    banana.addImage("Banana",bananaImage);
    banana.scale = 0.05;
    banana.velocityX=-3;
    
    foodGroup.add(banana);
  }
}
function spawnObstacle() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    
    
    //generate random obstacles
    
    obstacle.velocityX=-3;
    
    //assign scale and lifetime to the obstacle           
    obstacle.addImage("Stone",obstacle_img);
    obstacle.scale = 0.15;
    obstacle.lifetime = 150;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);

}
}
