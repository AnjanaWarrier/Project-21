var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  
 if (hasCollided(bullet,wall)){
   bullet.velocityX=0;
   damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if (damage<10){
    wall.shapeColor="green";
  }
  else if(damage>10){
    wall.shapeColor="red";
  }
  else {
    wall.shapeColor="grey";
  }

 }

 bullet.depth=wall.depth;
 bullet.depth=bullet.depth+1;

  drawSprites();

  
}

function hasCollided(lbullet,lwall){
  var bulletRightEdge,wallLeftEdge;
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
      return true;
  }
  return false;
}