function setup() {
  createCanvas(800,400);
 Callup= createSprite(400, 200, 50, 50);
 Decline= createSprite(300,200,50,100);

 Hand=createSprite(200,300,20,20)
 Leg=createSprite(200,150,20,20)
 Hand.velocityY=-1

}

function draw() {
  background('cyan');
   Callup.x=mouseX 
   Callup.y=mouseY
  if(Collied(Callup,Decline)){
    Callup.shapeColor="yellow"
    Decline.shapeColor="yellow"
  }else{
    Callup.shapeColor="green"
    Decline.shapeColor="green"
  }

  if(Collied(Hand,Leg)){
    Hand.width=Hand.width*2
    Leg.width=Leg.width*2
    
  }else{
    Hand.width=20
    Leg.width=20
  }
  
  drawSprites();
}

