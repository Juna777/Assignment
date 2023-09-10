function numero(number){
    let num = document.getElementById("num");
    num.value += number;
}
function operasyon(operator){
    let num= document.getElementById("num");
    num.value += operator;
}

function equal(){
    let num = document.getElementById("num");
    num.value = eval(num.value);
}
function clr(){
    let num = document.getElementById("num");
    num.value = "";
}
