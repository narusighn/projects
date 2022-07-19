function setup(){
    cnv=createCanvas(600,300);
    cnv.parent("Canvas");
    cam=createCapture(VIDEO);
    cam.size(600,300);
    cam.hide();

    pose=ml5.poseNet(cam,modelLoaded);
}

function modelLoaded(){
    console.log("Elon Musks says AI robots are dangerous!!!!! Please listen o the Tesla guy");
}

function draw(){
    img(cam,0,0,600,300);

}