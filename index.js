function DaytoHrs(){
    let num1=Number(document.getElementById("num1").value);
    let result=(num1*24);
    let num2=document.getElementById("num2");
    num2.value=result;
}

function DaytoMins(){
    let num3=Number(document.getElementById("num3").value);
    let result=(num3*1440);
    let num4=document.getElementById("num4");
    num4.value=result;
}

function DaytoSecs(){
    let num5=Number(document.getElementById("num5").value);
    let result=(num5*86400);
    let num6=document.getElementById("num6");
    num6.value=result;
}
function clr(){
    let num = document.getElementById("num");
    num.value = "";
}