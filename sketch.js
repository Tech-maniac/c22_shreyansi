const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var object;
var ground;
function setup() 
{
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world;

  var options={
    isStatic : true
  }


  object = Bodies.rectangle(400,200,100,100,options);
  World.add(world, object);


  console.log(object);

  
}

function draw()
{
  Engine.update(engine);

  background("lightgreen");  

  rectMode(CENTER);
  
  rect(object.position.x, object.position.y,100,100 );
  
}