
var paper1
var ground1
var dustbin1,dustbin2,dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	backgroundColor="black";

	engine = Engine.create();
	world = engine.world;

	paper1= new Paper(200,670,15,15);
	dustbin1= new Dustbin(600,670,200,20);
	dustbin2= new Dustbin(500,700,20,400);
	dustbin3= new Dustbin(700,700,20,400);
	
	ground1= new Ground();
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  image(dustbinimage,480,480,250,200);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-29});
	}

}


