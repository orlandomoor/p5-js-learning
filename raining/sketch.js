let drops = [];

function setup() {
  createCanvas(600, 400);
  frameRate(30);
  
  for ( let i = 0; i < 500; i++) {
   let d = new Drop();
    drops.push(d);
  }
}

function draw() {
  background(10);
  
  for ( let i = 0; i <500; i++) {
  drops[i].fall();
  drops[i].show();
  drops[i].hit();
  }
}
