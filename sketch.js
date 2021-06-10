var starImg,bgImg;
var star, starBody;

//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyMoving;
var fairySound; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");

    fairySound = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairySound.play();

	//create fairy sprite and add animation for fairy
    fairy = createSprite(200,500);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.25;

	//create star and add image for star
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.15;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

 if(star.y > 470 && starBody.position.y > 470)
 {
    Matter.Body.setStatic(starBody,true);

	fairy.velocityX = 0;

 }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode === LEFT_ARROW)
	{
      fairy.velocityX  = -2;
	} 
      
    if(keyCode === RIGHT_ARROW)
	{
      fairy.velocityX  = 2;
	}     
	
}
