objectDetector= "";

img = "";
objects = [];
status4 = "";

function preload(){
  img = loadImage('microwave.webp');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status4").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status4 = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw() {
  if (status4 != undefined) {
  	  image(img, 0, 0, 640, 420);
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status4").innerHTML = "Status : Objects Detected";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}