 var  video="";
var status="";

function  preload() {
    video=createVideo('video.mp4');
    video.hide();
}

function  setup() {
    canvas=createCanvas(480,400);
    canvas.center();
}

function  start() {
    objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}

function ModelLoaded(){
    console.log("Model Loaded! 🏏");
    status=true;
    video.loop();
    video.speed[1];
    video.volume[100];
}

function  draw() {
    image(video,0,0,480,400);
}