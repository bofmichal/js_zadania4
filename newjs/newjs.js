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
}

//zad2
function obwod(){
    var boka=parseFloat(document.getElementById("dlugosca").value);
    var bokb=parseFloat(document.getElementById("dlugoscb").value);
    var wynik;
    if(isNaN(boka || bokb)){
        alert("wprowadz jako bok a liczbę naturalną");
    }
wynik=2*boka+2*bokb;
document.getElementById("suma1").innerHTML=wynik;
}