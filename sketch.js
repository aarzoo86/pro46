
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fishImage,backgroundImage,shark,sharkImage,fish,fishGroup,whale,whaleImage,whaleGroup,gameoImage;
function preload(){
  fishImage =loadImage("fishy.png")
  backgroundImage = loadImage("sea.jpg");
  sharkImage = loadImage("shark.png");
  whaleImage = loadImage("bwhale.png");
  gameoImage = loadImage("9.jpg");
}  
function setup() {
	createCanvas(800, 700);

  bg = createSprite(100,100);
    bg.addImage(backgroundImage);
     bg.velocityX = -1;
//to reset ground
  bg.x = bg.width/2;
  console.log(bg.x);

  fishGroup = new Group();
    whaleGroup = new Group();
    
    
    fish = createSprite(450,200,10,10);
  fish.addImage(fishImage);
      fish.scale = 0.05;
    fish.velocityX = - 3;
    
    shark = createSprite(50,200);
  shark.addImage(sharkImage);
  shark.scale = 0.3;
  shark.velocityX = 0.5;
    
     whale = createSprite(500,200);
  whale.addImage(whaleImage);
  whale.scale = 0.4;
  whale.velocityX = -0.6;
    


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX+", "+mouseY, mouseX, mouseY);
  
  if(keyDown("DOWN")){
    
   shark.y = shark.y + 5 ;
    
  }
  
if(keyDown("UP")){
    
   shark.y = shark.y - 5 ;
    
  } 
  
  if(keyDown("left")){
    
   shark.x = shark.x - 5 ;
    
  }
  
  if (bg.y > 400){
      bg.y = 300;
    } 
  
  if(fish.isTouching(shark)){
    fish.scale = 0; }
  
    spawnFish();
    spawnWhale();
  
 if(whale.isTouching(shark)){
   
   shark.scale = 0;
   whaleGroup.destroyEach();
   fishGroup.destroyEach();

   whale.x = -20;
   
   bg.depth = shark.depth;
   bg.depth = bg.depth + 1;
   
   bg.depth = whaleGroup.depth;
   bg.depth = bg.depth + 1;
   
   bg.depth = fishGroup.depth;
   bg.depth = bg.depth +1;
   
   bg.addImage(gameoImage);
   bg.x = 300;
   bg.y = 200;
   bg.velocityX = 0;
   
   
 } 

  drawSprites();
 
}

function spawnFish() {
  
  if(frameCount%100===0) {
   
  fish = createSprite(450,200);
  fish.addImage(fishImage);
  fish.scale = 0.07;
  fish.velocityX = -3;
  fish.lifetime = 600;
  fish.y = Math.round(random(120,400));
  fishGroup.add(fish);
}

}

function spawnWhale() {
  
  if(frameCount%700===0) {
   
  whale = createSprite(400,400);
  whale.addImage(whaleImage);
  whale.scale = 0.4;
  whale.velocityX = -0.6;
  whale.lifetime = 600;
  whale.y = Math.round(random(450,450));
  whaleGroup.add(whale);
}

}

