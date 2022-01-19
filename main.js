function preload(){

}

function draw(){
image(video,0,0,400,400)
}

function setup(){
    Owl=createCanvas(400,400);
    Owl.position( 700,250);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet();
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is intialized");
}

function selfieTime(){
    save('Cute-Doggy-You!.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x = "+ results[0].pose.nose.x);
        console.log("nose_y = "+ results[0].pose.nose.y);
    }
}