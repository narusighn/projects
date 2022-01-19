noseX=0;
noseY=0;

function preload(){
    flower_nose=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0scGGR7qvUfJ49xNuDtNiVFuyTrBE-5bitw&usqp=CAU");
}

function draw(){
    image(video,0,0,400,400);
    image(flower_nose,noseX,noseY,30,30);
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);
        console.log("nose_x = "+ results[0].pose.nose.x-5);
        console.log("nose_y = "+ results[0].pose.nose.y-5);
    }
}