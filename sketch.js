var ground;
var tree;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	treeImage=loadImage("tree.png")
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,600,1000,10);
	stone = new Stone(120,500,10)
  console.log(stone);
  mango1 = new Mango(700,300,10)
  mango2 = new Mango(500,200,10)
  mango3 = new Mango(600,150,10)
  mango4 = new Mango(600,300,10)
  mango5 = new Mango(400,300,10)
  mango6 = new Mango(500,300,10)
  mango7 = new Mango(600,300,10)
  slingshot = new Slingshot(stone.body,{x:130,y:500});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();

  image(treeImage,300,100,500,500)
  image(boyImage,100,450,150,200)

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  slingshot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function detectcollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
if (distance<=Lmango.radius+Lstone.radius){
Matter.Body.setStatic(Lmango.body, false)
}}

function keyPressed(){
    if(keyCode === 32){
       // stone.trajectory=[];
       Matter.Body.setPosition(stone.body,{x:120, y:500});
       slingshot.attach(stone.body);
       // gameState = "onSling";
    }
}