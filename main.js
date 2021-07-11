var guestList=[];

function add(){
    var name=document.getElementById("guest_1").value;
    guestList.push(name);
    console.log(guestList);
    document.getElementById("guest_1").value="";
}

function show(){
    document.getElementById("display_div").innerHTML=guestList;
}

function search(){
    var searched_name=document.getElementById("search_input").value;

    for(i=0;i<guestList.length;i++){
        if(searched_name==guestList[i]){
            
            document.getElementById("searched_names").innerHTML=searched_name+" is there in the list";
        }
        else{
            document.getElementById("searched_names").innerHTML="";
        }
    }
        
      
}