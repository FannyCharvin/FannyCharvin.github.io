
function setup() {
  createCanvas(500,500);
  frameRate(1);
}

function draw() {

  background(233);

  push();
  translate(96, 55);
  tri(300);
  pop();
  translate(width/2, height/2);

  var diam = random(150,300) ;
  for (var i = 6; i < 10; i++) {
		push();
		rotate(PI * i / 8);
		var tx = 100 * noise(0.8*frameCount + 10);
		translate(tx, tx/1);
		circle (0, 10, diam);
    pop();
		}

  for (var i = 6; i < 10; i++) {
		push();
		rotate(PI * i / 16);
		var tx = 100 * noise(0.8*frameCount + 10);
		translate(tx, tx/1);
		circle (0, 10, diam);
    pop();
		}

  for (var i = 6; i < 10; i++) {
    push();
    rotate(PI * i / 4);
    var tx = 100 * noise(0.8*frameCount + 10);
    translate(tx, tx/1);
    circle (0, 10, diam);
    pop();
    }
  }


function circle(x,y,diameter){
  stroke(128,180,160);
  noFill();
  ellipse(x,y,diameter, diameter);
}

function circleline(taille) {
   circle(taille/1.5, taille/1.5, taille/1.2);
   line(taille,taille/2.4,taille/2.4, taille);
 }

function tri(taille) {
   noStroke();
   fill(0,46,56);
   triangle(taille,taille,taille/2,taille/5, taille/15,taille/1);
 }
