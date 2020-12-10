var fixedrec,movingrec;




function setup() {
  createCanvas(1200,800);
   fixedrec = createSprite (600, 400, 50, 80);
movingrec = createSprite(400,200,80,30);
}

function draw() {
  background(255,255,255);  

movingrec.x = mouseX;
movingrec.y=mouseY;
if(movingrec.x-fixedrec.x < fixedrec.width/2+movingrec.width/2
  && fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2
  &&movingrec.y-fixedrec.y < fixedrec.height/2+movingrec.height/2
  && fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2){
    movingrec.shapeColor="red";
    fixedrec.shapeColor="red";
  }
else{
  movingrec.shapeColor="green";
  fixedrec.shapeColor="green";
}
  drawSprites();
}