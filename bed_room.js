status="";
img="";
object_detector="";

function preload(){
    img=loadImage('bed_room.jpg');
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(350,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

 function modelLoaded(){
     console.log("Model loaded");
     status=true;
     object_detector.detect(img,gotResults);

 }

 function gotResults(results,error){
     if(error){
         console.error(error);
     }
     console.log(results);
     objects=results;
 }

 function  draw(){
     image(img,0,0,640,350);
     if (status != "") {
  	  image(img, 0, 0, 640, 420);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";

      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
 