let sign = "X";
let disp = document.getElementById("player");

function printx(number){
    let ab = document.getElementById("r"+number);
    console.log(ab);
    if(ab.innerText==""){
        ab.innerText=sign;
        checksign();
        disp.innerHTML="<center>"+sign+"'s Turn"+"</center>"
    }
}

function checksign(){
    if (sign=="X"){
        sign = "O";
    }
    else{
        sign = "X"
    }
}
