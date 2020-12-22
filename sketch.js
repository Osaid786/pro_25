var paper,ground,box1,box2,box3,dustbinSprite;
var paperImage,dustbinImage;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Mater.Body;



function preload(){
dustbinImage=loadImage("bin.png")
paperImage=loadImage("paper.png")
}

function setup() {
	createCanvas(800,700)
    
     
	ground=createSprite(400,690,800,30)
	box1=createSprite(500,670,200,20)
	box1.shapeColor=color(2)
	box2=createSprite(400,580,20,200)
	box2.shapeColor=color(2)
	box3=createSprite(600,580,20,200)
	box3.shapeColor=color(2)
	paper=createSprite(100,660,40,40)
	paper.shapeColor=color(0)
	paper.addImage(paperImage)
    paper.scale=0.15
    
	dustbinSprite=createSprite(500,570,180,200)
	dustbinSprite.addImage(dustbinImage)
	dustbinSprite.scale=0.20
 
  


}

function draw(){
	background(225)
    paper.collide(ground)
	paper.collide(box1)
	paper.collide(box2)
	paper.collide(box3)
	
	if (keyDown("UP_ARROW")) {
		if (paper.y>50) {
			paper.y=paper.y-7
	    }
         
	}

	if (keyDown("DOWN_ARROW")) {
		if (paper.y>50) {
			paper.y=paper.y+7
	    }
         
	}

	if (keyDown("LEFT_ARROW")) {
		if (paper.x>50) {
			paper.x=paper.x-7
	    }
         
	}

	if (keyDown("RIGHT_ARROW")) {
		if (paper.x<750) {
			paper.x=paper.x+7
	    }
         
	}
	
	
	drawSprites();
}