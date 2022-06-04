status1="";
img="";
object_detector="";

function preload(){
    img=loadImage('clock.jpg');
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(350,250);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status1").innerHTML="Status : Detecting Objects";
}

 function modelLoaded(){
     console.log("Model loaded");
     status1=true;
     object_detector.detect(img,gotResults);

 }

 function gotResults(results,error){
     if(error){
         console.error(error);
     }
     console.log(results);
 }

 function  draw(){
     image(img,0,0,640,350);
     
 }