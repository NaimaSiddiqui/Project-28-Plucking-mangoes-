
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body=Matter.body;

const Constraint =Matter.Constraint;

var tree,ground,stone,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var launcher;
var launchingForce=100;
var world,engine;
function preload()
{
	boyImage=loadImage("images/boy.png");
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
  tree= new Tree(600,430);
  stone= new Stone(110,420,30)
  mango1= new Mango(610,350,30)
  mango2= new Mango(500,350,30)
  mango3= new Mango(550,300,20)
  mango4= new Mango(490,300,30)
  mango5= new Mango(534,350,20)
  mango6= new Mango(640,286,30)
  mango7= new Mango(750,350,30)
  mango8= new Mango(710,250,20)
  mango9= new Mango(680,250,20)
  mango10= new Mango(600,250,30)
  mango11= new Mango(538,231,20)
  mango12= new Mango(645,195,20)
  launcher=new Launcher(stone.body, {x:107, y:408})

 ground= Bodies.rectangle(0,650,800,20,{isStatic: true});
World.add(world,ground);


Engine.run(engine);
  
}




function draw() {
	background("lightblue");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  rectMode(CENTER);
  Engine.update(engine);
  fill("green")
  rect(400,ground.position.y,800,20) 

image(boyImage,150,500,100,350)
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);


}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
  console.log("MOusereleased")
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:107, y:408})
launcher.attach(stone.body);
}
}

function detectCollision(stone1,mango1){
  mangoBodyPosition=mango1.body.position;
  stoneBodyPosition=stone1.body.position;

  var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
  console.log("distance between mango and stone: "+distance);
  if(distance <= mango1.r + stone1.r){
    Matter.Body.setStatic(mango1.body,false);
  }

}