let star = "";
for (let i =0; i <20; i++){
    document.getElementById("new_sample").innerHTML += star + "<br>";
    star = star + "*";
}

function lights(){
    let colors = ['#FFFF00','#FF0000','#00FF00','#FF8000','#00FFFF','#FF00FF'];
    let random_color = Math.floor(Math.random() *6);
    
    document.body.style.color = colors [random_color];
}
function start(){
    let color =['#9ED2BE'];
    go = setInterval(lights,500);
    document.body.style.backgroundColor = backgroundColor ['#9ED2BE'];
}

function stop(){
    clearInterval(go);
}
