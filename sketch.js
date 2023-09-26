let costas2;
let costas1;

function preload() {
  costas2 = loadImage("costas2.jpg");
  costas1 = loadImage("costas1.jpg");
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  let tempo = millis() % 1000;
  if (tempo > 500) {
    image(costas1, 0, 0);
  } else {
    image(costas2, 0, 0);
  }
}
