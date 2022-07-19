function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}

function draw(){
    img(video,300,200,700,500);
    fill("red");
    circle(20,40,40);
    circle(20,660,40);
    circle(20,40,460);
    circle(20,660,450);
    fill("green");
    rect(40,460,20,500);
    rect(40,450,20,500);
    rect(40,660,20,700);
    rect(40,660,20,700);
}