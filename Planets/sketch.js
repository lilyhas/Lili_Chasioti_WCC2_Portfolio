/*
  Solar sim
 */

// keeping track of the current frame enables us to track time. 
// this helps us move things in our sketch
let frame = 0;

function setup(){
 createCanvas(windowWidth, windowHeight); 
}

function draw(){
  
  // draw a slightly transparent rect (second fill parameter) instead of using background
  // fill(32, 32, 32, 8);
  // rect(0,0, width, height);
  background(32, 32, 32, 30);
  
  // draw some static noise using random
  stroke(240);
  strokeWeight(0.5);
  for(let i = 0 ; i < 1000; i++){
    point(random(width), random(height));
  }

//strokeWeight(4);

 for (n = 0; n<10; n++){
  //strokeWeight(4);
  stroke( random(240, 250), random(220, 245), 255);
  noFill();
  rect(400+ n*50, n*20, 400, 700);

 };

 

  push();
  
  translate(400,400);
  //rotate(0);
  //scale(3);
  drawRock();
  
  push();
  rotate( frame * 0.01);
  translate( -330, -300 );
  fill (250, 250, 250);
  ellipse(0,0, 10, 10);
 
  pop();
  pop();


  drawRock();
  translate(100, 100);
  let diam = random(100, 180);
 
  fill( random(240, 250), random(220, 245), 255);
  ellipse( frame*2, frame*4, diam, diam);
  ellipse( width-40, 800 -frame, diam/3, diam/3);
  scale(0.5); 
  
  drawRock();
  
 
  // start by moving moving to the center of the screen 
  // * this sketch has no use for top left so no need to push the matrix
  translate(width/2 -100, height/2 -100);
  
  // draw the earth 1
  push(); // first push 
  scale(2);
  rotate( frame * 0.01);
  translate( 400, 0 );
  fill (250, 250, 250);
  ellipse(0,0, 20, 20);
  
  // draw the moon 1
  push(); // second push
  
  rotate( frame * 0.01 * 10 );
  translate(20, 0);
  fill(127);
  ellipse( 0, 0, 30, 30); 
  
  pop();
   //-- back to earth
  pop();
  // -- back to sun
  
  translate(width/2 - 120, height/2 - 120);
  
  push(); // first push 2 
  scale(1);
  rotate( frame * 0.04 );
  translate( 500, 0 );
  fill (0);
 // ellipse(0,0, 10, 10);
  translate(-width/2 + 20, -height/2 + 20);
  drawRock();
  
  // draw the moon
  push(); // second push
  
  rotate( frame * 0.0002 * 60);
  scale(0.8);
  translate(400, 0);
  fill(100);
  drawRock(); 
  
  push(); // second push
  
  rotate( frame * 0.02 * 60 );
  translate(200, 0);
  fill(127);
 
  ellipse( 0, 0, 10, 10); 
  
  pop();

  pop();
   //-- back to earth
  pop();
  // -- back to sun

  translate(-width+500, -height+500);
  scale(4);
  
  // draw the earth 1
  push(); // first push 
  rotate( frame * 0.01 * 3);
  translate( 100, 0 );
  fill (250, 250, 250);
  //ellipse(0,0, 10, 10);
  translate(-width/2 + 20, -height/2 + 20);
  fill(200);
  drawRock();


  // draw the moon 1
  push(); // second push
  
  rotate( frame * 0.001 * 10 );
  translate(50, 0);
  fill(200);
  ellipse( 0, 0, 10, 10); 
  
  pop();
   //-- back to earth
  pop();
  // -- back to sun

  // don't forget to move the frame counter along - otherwise nothing will ever move
  frame++;

 // print('mouseX =' + mouseX +'  ' + 'mouseY =' + mouseY);
}

function drawRock(){
 // stroke(240);
//  strokeWeight(0.5);

  for(let i = 0 ; i < 1000; i++){
    point(random(width), random(height));
  }
//translate(0,0);
noStroke();
fill (60, 64, 70);
beginShape();
vertex(542, 416);
vertex(random(553,558),random(439,449));
vertex(572, 455);
vertex(random(580,590), 475);
vertex(607, 475);
vertex(random(623,633), 476);
vertex(641, 481);
vertex(656, 482);
vertex(670, 461);
vertex(random(680,690), random(461,480));
vertex(705, 468);
vertex(714, 440);
vertex(742, 408);
vertex(random(734,744), random(422,432));
vertex(741, 377);
vertex(730, 362);
vertex(716, 336);
vertex(random(677,687),random(322,332));
vertex(636, 330);
vertex(617, 338);
vertex(602, 363);
vertex(581, 371);
vertex(569, 377);
vertex(554, 396);
vertex(541, 416);
endShape(CLOSE); 

}


function drawRock2(){
  for(let i = 0 ; i < 1000; i++){
    point(random(width), random(height));
  }

translate(40,0);
noStroke();
fill (255, 250, 240);
beginShape();
vertex(0,0);
curveVertex(random(5,8),random(4,6));
curveVertex(random(6,7), 8);
curveVertex(random(6,8), 4);
vertex(random(9,11), random(3,5));
vertex(random(13,14), random(2,4));
vertex(random(20,30), random(15,20));
vertex(random(4,5), random(27,30));
endShape(CLOSE); 

}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}