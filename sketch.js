
var grupoCactos;
var grupoCloud;
var chao;
var cloud;
var cacto1,cacto2,cacto3,cacto4,cacto5,cacto6;
var chaoimg;  
var imgcloud;
var trex ,trex_running;
var chaoInvisivel;
var jogando=1;
var fimDoJogo=0;
var estadoDoJogo=jogando;
function preload(){
imgcloud=loadImage("cloud.png");

cacto1 = loadImage("obstacle1.png");
cacto2 = loadImage("obstacle2.png");
cacto3 = loadImage("obstacle3.png");
cacto4 = loadImage("obstacle4.png");
cacto5 = loadImage("obstacle5.png");
cacto6 = loadImage("obstacle6.png");

  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chaoimg=loadImage("ground2.png"); 
}

function setup(){
 createCanvas (600,300);
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.7;

  chao=createSprite (300,260,600,20);
  chao.addImage(chaoimg); 

  chaoInvisivel=createSprite (300,280,600,20);
  chaoInvisivel.visible=false;
  grupoCactos = createGroup();
  grupoCloud = createGroup();
}

function draw(){
  background("orange");
  text(mouseX+","+mouseY,mouseX,mouseY)
//console.log(trex.y)

  if (estadoDoJogo==jogando ) {
  chao.velocityX=-6;
  spawnClouds();
  gerarcacto ();
  if (chao.x<0) {
    chao.x=chao.width/2

    }
  if(keyDown("up")&& trex.y > 240) {
  trex.velocityY=-10;
      
      }
  trex.velocityY=trex.velocityY+0.8;
  if (chao.x<0) {
    chao.x=chao.width/2 
    }
   if (trex.isTouching(grupoCactos)) {
     estadoDoJogo=fimDoJogo
   } 
  }
  else if (estadoDoJogo==fimDoJogo) {
    chao.velocityX=0
    trex.velocityY=0
    grupoCactos.setVelocityXEach(0);
    grupoCloud.setVelocityXEach(0);
    grupoCactos.setLifetimeEach(-1);
    grupoCloud.setLifetimeEach(-1);
  }


  trex.collide(chaoInvisivel)
  drawSprites();

}

function spawnClouds(){
  
  if (frameCount%100===0) {
   cloud = createSprite(605,25,40,10);
   cloud.velocityX = -3;
   cloud.addImage(imgcloud);
   cloud.scale = 0.6;
   cloud.y = Math.round(random(10,100));
   cloud.lifetime = 300;
   grupoCloud.add (cloud);

  }
 

}
function gerarcacto () {
if (frameCount % 140==0) {
  var cactos = createSprite(605,240,1,1);
  cactos.velocityX = -6;
  cactos.scale = 0.8;
  var cactosr = Math.round(random(1,6));
  cactos.lifetime = 300;
  grupoCactos.add (cactos);
 
 switch(cactosr) {
   case 1:cactos.addImage(cacto1);
   break;
   case 2:cactos.addImage(cacto2);
   break;
   case 3:cactos.addImage(cacto3);
   break;
   case 4:cactos.addImage(cacto4);
   break;
   case 5:cactos.addImage(cacto5);
   break;
   case 6:cactos.addImage(cacto6);
   break;
default:break;


 }

}
}
