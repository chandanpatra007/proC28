var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball;
var dustbin;
var ground;
var launcher;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	
	 ground = new Ground(width/2,650,width,30);
	 ball = new Ball(200,250,40);
	 dustbin = new Dustbin(700,600,50,50);
	 launcher = new Launcher(ball.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin.display();
  launcher.display();  
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}




