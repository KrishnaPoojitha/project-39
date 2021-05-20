var end;
var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;
var arrowGroup,redGroup,greenGroup,blueGroup,pinkGroup;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score=0;
  
   arrowGroup=new Group();
   redGroup=new Group();
   greenGroup=new Group();
  blueGroup=new Group();
  pinkGroup=new Group();
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  if (keyDown("space")) {
    createArrow();
  }
  var random1=Math.round(random(1,4));
  if(frameCount%80===0){
    if(random1==1){
      redBalloon();
    }
    else if(random1==2){
      blueBalloon();
    }
    else if(random1==3){
      greenBalloon();
    }
    else{
      pinkBalloon();
    }
  }
   // release arrow when space key is pressed
  
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
   if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
   if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+5;
  }
   if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  
  drawSprites();
  fill("white");
  text("SCORE: "+score,270,30);
  
   if(score>=50){
    background.velocityX=0;
     end();
   fill("black");
    text("GAMEOVER",300,300);
  }
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.y=bow.y;
  arrow.x=360;
  arrow.addImage(arrowImage)
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
function redBalloon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX=3;
  red.scale=0.1;
  redGroup.add(red);
}
function blueBalloon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX=3;
  blue.scale=0.1;
  blueGroup.add(blue);
}
function greenBalloon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX=3;
  green.scale=0.1;
  greenGroup.add(green);
}
function pinkBalloon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX=3;
  pink.scale=1;
  pinkGroup.add(pink);
}
function end(){
  pink.velocityX=0;
  green.velocityX=0;
  blue.velocityX=0;
  red.velocityX=0;
  arrow.velocityX=0;
  bow.velocityY=0;
   
}