picture="";

function setup(){
    canvas=createCanvas(900,700);
    canvas.center();

}

function change(){
    window.location.href="index2.html"
}


function draw(){
    if(but1=true){
        picture="LivvingRoom.jpg";
        image(picture,0,0,900,700);
    }
    else if(but2=true){
        picture="Kitchen.jpg";
        image(picture,0,0,900,700);
    }
    else if(but3=true){
        picture="pantry.jpg";
        image(picture,0,0,900,700);
    }    
    else{
        picture="dresser.jpg";
        image(picture,0,0,900,700);
    }
}