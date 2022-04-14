var music1="";
var music2="";
var l_wristX="";
var l_wristY="";
var r_wristX="";
var r_wristY="";

function preload(){
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}


function setup(){
    Platform=createCanvas(800,500);
    Platform.center();

    Mirror=createCapture(VIDEO);
    Mirror.hide();

     Indentify=ml5.poseNet(Mirror,modelLoaded);
    Indentify.on('pose',gotResults);
}

function draw(){
    image(Mirror,0,0,800,500);
}

function start(){
    music1.play();
}

function modelLoaded(){
    console.log("model has intialised! You can do anything now, just do not hack!:)");
}

function gotResults(results){
    if(results.lenght>0){
        console.log(results);

        l_wristX=results[0].pose.leftWrist.x;
        l_wristY=results[0].pose.leftWrist.y;
        r_wristX=results[0].ppose.rightWrist.x;
        r_wristY=results[0].pose.rightWrist.y;
    }
}