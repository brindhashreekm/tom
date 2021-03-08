var backGround,backGroundImg;
var cat,catImg;
var mouse,mouseImg;
function preload() {
    //load the images here
    backGroundImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround=createSprite(200,200,1000,800);
    backGround.addImage(backGroundImg);
    cat=createSprite(400,400,10,10);
    cat.addImage(catImg);
    cat.scale=0.1;
    mouse=createSprite(200,400,10,10);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyDown(LEFT_ARROW))
    {
        cat.x=cat.x-5;  
    }
  //For moving and changing animation write code here


}
