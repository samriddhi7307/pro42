var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var raindrop = [];
var maxdrops = 100; 

function setup() {
  createCanvas(500, 750);
  engine = Engine.create();
  world = engine.world;
  umbrella1 = new umbrella(250,600,200,665);
  umbrella2 = new umbrella(250,600,1,1);
}
 
function draw() {
  background("black");
  Engine.update(engine);
  
  
    for(var i = 0; i<maxdrops;i++){
      raindrop = new raindrops(random(10,500),100,5); 
  }                                                                
     
     //raindrop = new raindrops(random(100,200),100,5);  
     raindrop.display();
     umbrella2.display();
}