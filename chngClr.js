document.getElementById("chngClr").style.color = "seagreen";


let allpara = document.getElementsByTagName("p");

for (let i = 0; i <allpara.length; i++){
    allpara[i].style.backgroundColor = "lightgray";
    allpara[i].style.fontSize = "2rem"
}