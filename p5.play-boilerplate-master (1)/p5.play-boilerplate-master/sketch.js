const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;
var ground ,string,ball ;




function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ball_options = {

      restitution : 1.0,
      density : 1.0
    
    }
    
    ball  = Bodies.circle(220,200,40,ball_options);
    World.add(world,ball);
    var ground_options={
      isStatic : true
    }
  
  
    
  
    ground = Bodies.rectangle(200,100,400,20,ground_options)
    World.add(world,ground);
  
     
    var options = {
      bodyA : ball,
      bodyB : ground,
      stiffness: 0.004,
      length : 100
    }
    var string = Constraint.create(options);
    World.add(world,string);
    
    fill("White");
    
    

   
    
}

function draw(){
    background(57,255,20);
    Engine.update(engine);
    fill("blue");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40);
    strokeWeight(8);
    stroke("white");
    
    line(ball.position.x,ball.position.y,ground.position.x,ground.position.y);
    
    if(keyCode === 32){
      ball.position.y = mouseY;
      ball.position.x = mouseX;
      }
      
      else if (keyCode === 13){
      ball.position.x = 200;
      
      }
      
    
}

