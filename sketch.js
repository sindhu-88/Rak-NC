
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var groundOBJ,groundS
var rope1;
var bob1,bob2,bob3,bob4,bob5

function preload()
{

}

function setup() {
	createCanvas(1200,400);


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(700,30,200,10)
	bob1=new Paper(600,250)
	bob2=new Paper(650,250)
	bob3=new Paper(700,250)
	bob4=new Paper(750,250)
	bob5=new Paper(800,250)
	
	rope1 = new Rope(bob1.body,{x:600,y:20})
    rope2= new Rope(bob2.body,{x:650,y:20})
    rope3= new Rope(bob3.body,{x:700,y:20})
    rope4= new Rope(bob4.body,{x:750,y:20})
    rope5= new Rope(bob5.body,{x:800,y:20})
//rope1=new rope1(bobobject1.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  ground.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope1.display();  
  rope2.display();  
  rope3.display(); 
  rope4.display(); 
  rope5.display(); 

 
}


function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
    }
}
