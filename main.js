screenWidth="";
screenHeight="";
apple=0;
speek_data="";
to_number=0;
draw_apple=0;

function preload(){
    loadImage(apple.png);
}

function setup(){
    screenWidth=window.innerWidth;
    screenHeight=window.innerHeight;
    createCanvas(screenWidth,screenHeight-150);
    canvas.position(0,150);
}

SpeechRecognition=window.webkitSpeechRecongnition;
recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="Listening Say a number ";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech recognised as ";
    to_number=Number(content);
 
 
    if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Drawing Apple";
    }
    else{
       
    document.getElementById("status").innerHTML="speech is not recognised as a number. Try again "; 
    }
}

function draw(){
    if(draw_apple=="set"){
        for(var i=1; i<=to_number; i++ )
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
        
        document.getElementById("status").innerHTML=to_number+"Apples Drawn";

        utterThis=new SpeechSynthesisUtterance(to_number+"Apples Drawn");
       synth.speak(utterThis);

}