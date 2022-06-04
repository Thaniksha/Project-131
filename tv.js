status4="";
img="";
object_detector="";

function preload(){
    img=loadImage('tv.webp');
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(350,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status4").innerHTML="Status : Detecting Objects";
}

 function modelLoaded(){
     console.log("Model loaded");
     status4=true;
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