var car ,wall,weight,speed

function setup() {
  createCanvas(800,400);

 car = createSprite(100, 200, 15, 15);
 wall = createSprite(700, 200,30,100);
 speed = random(55,90);
 weight = random(400,1500);

}

function draw() {
  background(0,0,0); 
  carSpeed();
  deformation();
  drawSprites();
}

function carSpeed(){
  if(keyDown("space")){
  car.velocityX=speed;
  }
}

function deformation(){
var deformation=0.5*weight*speed*speed/22500
  if(wall.x-car.x <car.width/2+wall.width/2){
    car.velocityX=0;
 if(deformation<100){
   car.shapeColor="green";
 }
 else if(deformation>100&&deformation<180){
car.shapeColor="yellow"
 }
 else if(deformation>180){

  car.shapeColor="red";
 }
  }
}