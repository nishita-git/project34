const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box4,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  //creating the ground
  ground = new Ground(700, 600, 1400, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1300,550,300);

  //level1 boxes
  box1 = new Box(600, 100, 70, 70);
  box5=new Box(600,100,70,70);
  box6=new Box(600,100,70,70);
  box7=new Box(600,100,70,70);
  box8=new Box(600,100,70,70);
  box9=new Box(600,100,70,70);

  //level2 boxes
  box14=new Box(750,100,70,70);
  box15=new Box(750,100,70,70);
  box16=new Box(750,100,70,70);
  box17=new Box(750,100,70,70);
  box18=new Box(750,100,70,70);
 
  //level3 boxes
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box10=new Box(900,100,70,70);
  box11=new Box(900,100,70,70);
  box12=new Box(900,100,70,70);
  box13=new Box(900,100,70,70);

  //level4 boxes
  box19=new Box(1050,100,70,70);
  box20=new Box(1050,100,70,70);
  box21=new Box(1050,100,70,70);
  box22=new Box(1050,100,70,70);
 
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  fill("red");
  box1.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  fill("blue");
  box2.display();
  box3.display();
  box4.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  fill("orange");
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  fill("green");
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  hero.display();
  rope.display();
  monster.display();

  textSize(30);
  fill("black");
  text("Drag the Superhero to destroy the monster!",600,50);


}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}