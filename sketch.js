var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

car=createSprite(50, height/2, 70, 50);
car.shapeColor="white";
car.velocityX=speed;
 wall=createSprite(1000,200,30,height/2)
}

function draw() {
  background(180);  
  
 if(wall.x-car.x<(car.width+wall.width+10)/2)
{
  car.velocityX=0;
  var deformation=0.5* weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(225,0,0)
  }
if(deformation<180)
{
  car.shapeColor=color(230,230,0)
}
if(deformation<100)
{
  car.shapeColor=color(0,225,0)
}

}



  drawSprites();
}