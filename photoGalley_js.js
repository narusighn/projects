var image=[
    "me.jpg",   
    "dad.jpg",
    "grand_pa.jpg",
    "mom.jpg",
    "grand_ma.png",
    "sis.jpg"
];

var names=[
    "Narayani","Snehal","Vasantrao","Minal","Prematai","Kaushiki"
];

var k=0;

function update(){

    k++
    var names_of_family_in_array=6;

    if(i >names_of_family_in_array){
        i=0
    }

    var updateImg= images[i];
    var updateName= names[i];

    document.getElementById("image").src=updateImg;
    document.getElementById("names").src=updateName;
}