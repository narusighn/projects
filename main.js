var music1="";
var music2="";


function preload(){
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}


function setup(){
    Platform=createCanvas("800,500");
    Platform.center();

    Mirror=createCapture(VIDEO);
    Mirror.hide();
}

function draw(){
    image(Mirror,0,0,800,500);
}