function log(){
    var pl_1=document.getElementById("player_1").value;
    var pl_2=document.getElementById("player_2").value;

    localStorage.setItem("player1",pl_1);
    localStorage.setItem("player2",pl_2);

    window.location="math_quiz.html";
}