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
//zad4
//a
function odadob(){
    var ar=[];
    var oda=parseFloat(document.getElementById("liczbaa").value);
    var dob=parseFloat(document.getElementById("liczbab").value);
    var sum=0;
    for (var i=0; i<(dob-oda)+1; ++i){
        //ar[i]=i+oda;
        sum += i+oda;
    }
    document.getElementById("suma3").innerHTML=sum;
        console.log(sum);
        if(isNaN(oda) || isNaN(dob)){
            alert("wpisz liczbę");
        }
        if(oda%1!=0 || dob%1!=0){
            alert("wpisz liczbę calkowita");
        }
}
//b
function sumaoczek(){
    var kostki=parseInt(document.getElementById("liczkost").value)
    var suma = 0;
var los;
for(var i = 0; i < kostki; ++i) {
los = Math.floor((Math.random()*6)+1);
suma += los;
console.log(los);
}
console.log(suma);
document.getElementById("suma4").innerHTML=suma;
//console.log(los);
}
//zad5
var tab=[];
//a
function tablica1(){
    for (var i = 0; i < 10; ++i) {
        tab[i] = 1 + Math.floor(Math.random() * 20);
        }
        console.log(tab);
        document.getElementById("tablica").innerHTML=tab;  
}
//d
function tablica2(){
    var asd=tab;
    var sum = 0;     
for (var i = 0; i < 10; ++i) {
sum += asd[i];

}
console.log("suma: " + sum);
console.log("srednia: " + sum / 10);
document.getElementById("srednia").innerHTML=sum/10;

}

//f
function tablica3(){
    /*var qwe=tab;
    var sr = parseInt(document.getElementById("srednia").innerHTML); 
var maxi; 
for (var i = 0; i < 10; ++i) {
/*if (qwe[i] > sr && qwe[i+1]>qwe[i]) {
    console.log(qwe[i]);
    //console.log([i]);
}
if (qwe[i] > sr){
    qwe.splice(i, i)
    console.log(qwe);
}
}*/
var min = Number.MAX_VALUE;
var qwe=tab;
    var minx = parseInt(document.getElementById("srednia").innerHTML);
    var minix;
    for (var i = 0; i < 10; ++i) {
        if (qwe[i] > minx && qwe[i] < min) {
            min = qwe[i];
            minix = i;
        }
    }    
    console.log(qwe);
    console.log(min);
    console.log(minix);
    document.getElementById("nsrednia").innerHTML =  min + " na pozycji " + minix;
}