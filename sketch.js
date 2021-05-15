  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var hex;
var hexagon;
var hexImg;
var score = 0;

function preload() {

  hexImg = loadImage("ball.png");

}

function setup() {

  createCanvas(1500,350);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(600, 260, 30, 40);
  block2 = new Block(570, 260, 30, 40);
  block3 = new Block(540, 260, 30, 40);
  block4 = new Block(630, 260, 30, 40);
  block5 = new Block(660, 260, 30, 40);


  block6 = new Block(585, 220, 30, 40);
  block7 = new Block(555, 220, 30, 40);
  block8 = new Block(615, 220, 30, 40);
  block9 = new Block(645, 220, 30, 40);


  bolck10 = new Block(600, 170, 30, 40);
  block11 = new Block(570, 180, 30, 40);
  block12 = new Block(630, 180, 30, 40);


  block13 = new Block(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 350, 1500, 20);


  block14 = new Block(900, 170, 30, 40);
  block15 = new Block(930, 170, 30, 40);
  block16 = new Block(870, 170, 30, 40);
  block17 = new Block(840, 170, 30, 40);
  block18 = new Block(960, 170, 30, 40);


  block19 = new Block(900, 140, 30, 40);
  block20 = new Block(930, 140, 30, 40);
  block21 = new Block(870, 140, 30, 40);
  block22 = new Block(900, 110, 30, 40);

  hex = new Hex(55, 190, 30, 30);

  hexagon = Bodies.circle(50, 200, 20);
  World.add(world, hexagon);

  chain = new Chain(this.hexagon,{x:100, y:200});

}

function draw() {

  background(rgb(56,44,44));
 
  textSize(35);
  fill("white"); 
  text("SCORE:"+score,1300,50);
  Engine.update(engine);

  push();
  strokeWeight(4);
  stroke("black")
  fill("white")  
  textSize(30);
  text("Drag the ball stone and release it to launch it towards the tower blocks", 200, 50);
  pop();

  push();
  fill("lightgrey")  
  textSize(20);
  text("press space to get second chance to play!!!", 1050, 290);
  pop();
//group1 4 level
  fill(rgb(135,206,234));
  block1.display();
  fill(rgb(135,206,234));
  block2.display();
  fill(rgb(135,206,234));
  block3.display();
  fill(rgb(135,206,234));
  block4.display();
  fill(rgb(135,206,234));
  block5.display();

//group1 3 level
fill(rgb(255,192,203));
  block6.display();
fill(rgb(255,192,203));
  block7.display();
fill(rgb(255,192,203));
  block8.display();
fill(rgb(255,192,203));
  block9.display();

  //group1 2 level
  fill(rgb(63,224,208));
  bolck10.display();
  fill(rgb(63,224,208));
  block11.display();
  fill(rgb(63,224,208));
  block12.display();

//group1 1 level
  fill(rgb(128,128,128));
  block13.display();

//group2 3 level
fill(rgb(135,206,234));
  block14.display();
fill(rgb(135,206,234));
  block15.display();
fill(rgb(135,206,234));
  block16.display();
fill(rgb(135,206,234));
  block17.display();
fill(rgb(135,206,234));
  block18.display();
  
//group2 2 level
  fill(rgb(63,224,208));
  block19.display();
  fill(rgb(63,224,208));
  block20.display();
  fill(rgb(63,224,208));
  block21.display();

  //group2 1 level
  fill(rgb(255,192,203));
  block22.display();

  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();



  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, hexagon.position.x, hexagon.position.y, 50, 45);

  chain.display();

}


function mouseDragged() {

  Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {

	if(keyCode === 32) {
		//Matter.Body.setPosition(hex.body, {x:85, y:200})
		chain.attach(this.hexagon);
  }
  
}