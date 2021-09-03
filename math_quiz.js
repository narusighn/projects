p_1=localStorage.getItem("player_1");
p_2=localStorage.getItem("player_2");

score1=0;
score2=0;

input_value=document.getElementById("").value;
input_value1=document.getElementById("").value;

number_1=document.getElementById("question_input").value;
number_2=document.getElementById("question_input_1").value;

function send(){
    document.getElementById("out_text").innerHTML=number_1+"+"+number_2;
    
    answer=number_1+number_2;

    answer_input_value=document.getElementById("answer_input").value;
 
    if(answer_input_value==answer){
        
        score1=score1+1;
        score2=score2+1;
    }
}