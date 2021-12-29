webcam.set({
    width:350,
    height:300,
    img_format:'jpeg',
    jpeg_quality:90
});

Webcam.attach("#camera");

function take_jpegIMG(){
    Webcam.snap(function(data_uri){
        document.getElementById("finalProduct").innerHTML='<img id="finalIMG" src="'+data_uri+'">';
         });
    }

console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DPDspg3um/',modelLoaded);
function modelLoaded(){
    console.log("ml5 model is loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first Prediction is"+prediction_1;
    speak_data_2="The second Prediction is"+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1=speak_data_2);
    synth.speak(utterthis);
}