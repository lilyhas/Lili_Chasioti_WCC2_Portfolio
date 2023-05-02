/*
  A grid of Mohr patterns
  Programming for artists and designers
  Joe McAlister
*/

let f = 0.0;
let spc;
let numIters;
let redC= 0;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  // our grid spacing
 
}


function draw()
{
  background(0,0,0,30);
  
  
  numIters = 3; 
  spc = width / numIters;
  posX = width/3;
  posY = height/3;
  
  for (let h = 0; h < numIters; h++) {
    for (let l = 0; l < numIters; l++) {
      // push and pop matrix so that we dont cumulatively translate 
      
      push();
      
      // move to the current location in the grid
     // translate(spc/2 + h * spc, spc/2 +  l * spc);
      
     
      scale(2);
       translate(posX, posY);
      // call a function which draws something at (0, 0)
      //drawAHas( h + 1, l + 1);
      
      drawAHas( h , l);
      
      pop();
      
      
      
      
//       push();
      
//       // move to the current location in the grid
//       translate(spc/2 + i * spc, spc/2 +  j * spc);
      
//       // call a function which draws something at (0, 0)
//       drawAMohr( i + 1, j + 1);
      
//       pop();
    }
  }
  
  // itterate f so we have an animation
  f+= 0.001;
}


/*
  This function uses perlin noise aka noise();
  Unlike random(), noise() will return consistent results for the same parameters
  This means it's good for animation
  https://processing.org/reference/noise_.html
*/
// function drawAMohr(i, j)
// {
//   beginShape();
//   for (let k = 0; k < 15; k++) {
//     vertex(noise( k * j, i + f) * spc  - spc/2, noise( i, j *k + f ) * spc - spc/2);
//   }
//   endShape();
// }



function drawAHas(l, h)
{
  beginShape();
 
  noStroke();
  fill(250,250,250,random(80));
  for (let k = 0; k < 15; k++) {
    curveVertex(noise( 8*k * 8*h, 8*l + 8*f) * spc  - spc, 2*noise( h, l *k + f ) * spc-270,
               noise( 30*k * 8*h, 8*l + 8*f),
                noise( 3*k * 8*h, 3*l + 4*f)
               );
    
   
  }
  endShape(CLOSE);
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}