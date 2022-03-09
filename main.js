function setup(){
    VirtualCam=createCapture(VIDEO);
    VirtualCam.size(600,500);

    CreateStage=createCanvas(600,500);
    CreateStage.position(700,150);

    BodyPartIdentifer=ml5.poseNet(VirtualCam,poseNetLoaded);
    BodyPartIdentifer.on('pose',gotBodyPart);
}

function poseNetLoaded(){
    console.log("poseNet is Intialized");
}

function gotBodyPart(results){
    if(results.legth>0){
        console.log(results);
    }
}

function draw(){
    background("yellow");
}

