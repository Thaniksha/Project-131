staus="";
bedroom_img="";

function preload(){
    bedrooom_img=loadImage("bed_room.jpg");
}

function setup(){
    canvas=createCanvas(640,350);
    canvas.position(350,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

 function modelLoaded(){
     console.log("Model loaded");
     Status=true;
     object_detector.Detect(bedroom_img,gotResults);

 }

 function gotResults(results,error){
     if(error){
         console.error(error);
     }
     console.log(results);
 }

 function  draw(){
     image(bedroom_img,0,0,640,350);
     
 }