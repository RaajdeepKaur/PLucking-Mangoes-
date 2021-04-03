
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, stone, mango, tree;
var boyImage, stoneImage, mangoImage, treeImage

function preload()
{
	boyImage = loadImage("Plucking Mangoes/boy.png");
	mangoImage = loadImage("Plucking Mangoes/mango.png");
	treeImage = loadImage("Plucking Mangoes/tree.png");
	stoneImage = loadImage("Plucking Mangoes/stone.png");
}

function setup() {
	createCanvas(1400, 600);

	tree = createSprite(300,325,20,20);
	tree.addImage(treeImage);
	tree.scale = 0.5;

	var ground = createSprite(1400,600,2800,20);
	ground.shapeColor = "blue";

	boy = createSprite(650,505,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(580,405,20,20);

	mango1 = new Mango(250,300,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  
  drawSprites();
 stone.display();
 mango1.display();
}



