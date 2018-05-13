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
//a
function obwod(){
    var boka=parseFloat(document.getElementById("dlugosca").value);
    var bokb=parseFloat(document.getElementById("dlugoscb").value);
    var wynik;
    if(isNaN(boka || bokb)){
        alert("wprowadz jako bok a liczbę naturalną");
    }
wynik=2*boka+2*bokb;
document.getElementById("suma1").innerHTML=wynik;
console.log(wynik);
}
//b
function cenabrutto(){
    var netto=parseFloat(document.getElementById("cenanetto").value);
    var vat=parseFloat(document.getElementById("vat").value);
    var brutto;
    if(isNaN(netto || vat)){
        alert("wprowadz jako netto i vat liczbę naturalną");
    }
    if(vat<0 || vat>100){
        alert("vat musi zawierać się w przedziale od 0% do 100%");
    }
    brutto=(netto*(vat*0.01))+netto;
    document.getElementById("suma2").innerHTML=brutto;
    console.log(brutto);
}
//zad3
//a
function calkowita(){
    var calkowita=parseFloat(document.getElementById("czycalkowita").value);
    if(isNaN(calkowita)){
        alert("wpisz liczbę");
    }
    if(calkowita%1==0){
        document.getElementById("liczba1").innerHTML="Wpisana liczba: "+calkowita+" jest calkowita";
    console.log(calkowita);
    }
    else{
        document.getElementById("liczba1").innerHTML="Wpisana liczba: "+calkowita+" nie jest calkowita";
        console.log(calkowita);
    }
}
//b
function dodatnia(){
    var dodatnia=parseFloat(document.getElementById("czydodatnia").value);
    if(isNaN(dodatnia)){
        alert("wpisz liczbę");
    }
    if(dodatnia>0){
        document.getElementById("liczba2").innerHTML="Wpisana liczba: "+dodatnia+" jest dodatnia";
    console.log(dodatnia);
    }
    if(dodatnia<0){
        document.getElementById("liczba2").innerHTML="Wpisana liczba: "+dodatnia+" jest ujemna";
    console.log(dodatnia);
    }
    if(dodatnia==0){
        document.getElementById("liczba2").innerHTML="Wpisana liczba: "+dodatnia+" jest rowna zero";
        console.log(dodatnia);
    }
}