let bubs = []; // an empty array
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(10, 100);
    let col = color(random(255), random(255), random(255));

    let b = new Bubble(x, y, sz, col); // make a new bubble
    bubs.push(b); // add it to the array
  }

}

function draw() {
  background("#FCDFFF");
  //score text
  textSize(60);
  noStroke();
  fill(0);
  text(score, 730, 600);

  //text
  push();
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(25);
  text('move the cursor to make the bubbles burst!', windowWidth / 2, windowHeight - 70);
  pop();

  for (let bub of bubs) {
    bub.display();
    bub.update();
    bub.burst();
  }

}

class Bubble {
  constructor(tempX = 200, tempY = 200, tempSize = 50, tempColor = 0) {
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    this.color = tempColor;
    this.alive = true;
  }

  //bubbles
  display() {
    if (this.alive) {
      noFill();
      strokeWeight(2);
      stroke(this.color);
      ellipse(this.x, this.y, this.size);
    }
  }

  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

//to make it burst
  burst() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
      // over the bubble
      this.alive = false;
      this.x = 1000000;
      this.y = 1000000;
      score++;
    }

  }

}
