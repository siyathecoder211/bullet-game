var bullet, target, gun;
var speed, weight, thickness;
var handL, handR;

function setup() {
  createCanvas(800,400);

  bullet = createSprite(710,200,70,10);
  bullet.shapeColor = "white";

  gun = createSprite(710,200,80,20);
  gun.shapeColor = "black";

  handL = createSprite(750,225,100,30);
  handL.shapeColor = color(219, 201, 171);

  handR = createSprite(750,175,100,30);
  handR.shapeColor = color(219, 201, 171);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  target = createSprite(0,200,thickness,height/2);
  target.shapeColor = color(80,80,80);

  bullet.velocityX = speed * -1;

}

function draw() {
  background("gray");  

  bulletCrash(bullet,target);

  drawSprites();
}