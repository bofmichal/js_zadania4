//zad1
function zmianatextu1(){
    var zmiana=document.getElementById("text1zm").value;
    document.getElementById("text1").textContent = zmiana;
}
function zmianatextu2(){
    var nowy = document.createElement("span");
    var zmiana=" "+document.getElementById("text1zm").value;
var tekst = document.createTextNode(zmiana);
nowy.appendChild(tekst);
var rodzic = document.getElementById("text1");
rodzic.appendChild(nowy);
    
    //document.getElementById("text1").innerHTML = pierwszy+zmiana;
}