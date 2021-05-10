function setup() {
  createCanvas(720, 720);
  background(0, 32, 63);
  noFill();
  noLoop();
}

function draw() {
  //create noise background
  push();
  noStroke();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      var n = 150 * noise(0.01 * x, 0.01 * y);
      
      fill(n, n, n, 75);
      rect(x, y, 1, 1);
    }
  }
  pop();

  //create trigonometric shape
  push();
  translate(width / 2, height / 2);

  var r = 239
  var g = 66;
  var b = 102;

  for (i = 1; i < 2500; i++) {
    stroke(r, g, b, 85 - (i / 20));
    ellipse(cos(i / 50) * (i / 5), sin(i / 50) * (i / 5), cos(i / 30) * 125, 125);
    r += 0.00193;
    g += 0.105;
    b += 0.051;
  }
  pop();
}