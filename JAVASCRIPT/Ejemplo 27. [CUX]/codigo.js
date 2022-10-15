var primerelemento, operacion, numpuntos=0;
function agregareventos(){
    var elemento;
    elemento=document.getElementById("boton1");
    elemento.onclick=pulsouno;
    elemento=document.getElementById("boton2");
    elemento.onclick=pulsodos;
    elemento=document.getElementById("boton3");
    elemento.onclick=pulsotres;
    elemento=document.getElementById("boton4");
    elemento.onclick=pulsocuatro; 
    elemento=document.getElementById("boton5");
    elemento.onclick=pulsocinco; 
    elemento=document.getElementById("boton6");
    elemento.onclick=pulsoseis;
    elemento=document.getElementById("boton7");
    elemento.onclick=pulsosiete;
    elemento=document.getElementById("boton8");
    elemento.onclick=pulsoocho;
    elemento=document.getElementById("boton9");
    elemento.onclick=pulsonueve;
    elemento=document.getElementById("boton0");
    elemento.onclick=pulsocero;
    elemento=document.getElementById("boton*");
elemento.onclick=pulsomultiplicar;
    elemento=document.getElementById("botonborrar");
    elemento.onclick=pulsoborrar;
    elemento=document.getElementById("botoncoma");
    elemento.onclick=pulsocoma;
    elemento=document.getElementById("botonigual");
    elemento.onclick=pulsoigual;
    elemento=document.getElementById("boton+");
    elemento.onclick=pulsosumar;
    elemento=document.getElementById("botonresta");
    elemento.onclick=pulsorestar;
}
function pulsouno(){
    var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "1";
}
function pulsodos(){
     var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "2";
}
function pulsotres(){
     var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "3";
}
function pulsocuatro(){
    var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "4";
}
function pulsocinco(){
     var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "5";
}
function pulsoseis(){
    var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "6";
}
function pulsosiete(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "7";
}
function pulsoocho(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "8";
}
function pulsonueve(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "9";
}
function pulsocero(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + "0";
}
function pulsomultiplicar(){
        var elemento;
    elemento=document.getElementById("resultado");
    primerelemento = elemento.value;
    elemento.value="";
    operacion="multiplicar";
}
function pulsoborrar(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = "";
}
function pulsorestar(){
    var elemento;
    elemento=document.getElementById("resultado");
    primerelemento = elemento.value;
    elemento.value="";
    operacion="resta";
}
function pulsosumar(){
        var elemento;
    elemento=document.getElementById("resultado");
    primerelemento = Number(elemento.value);
    elemento.value="";
    operacion="sumar";
}
function pulsoigual(){
        var elemento;
    elemento=document.getElementById("resultado");
    if(operacion=="resta"){
        elemento.value=primerelemento-Number(elemento.value);
    }else if(operacion=="sumar"){
        elemento.value=primerelemento+Number(elemento.value);
    }else if(operacion=="multiplicar"){
        elemento.value=primerelemento*Number(elemento.value);
    }
}
function pulsocoma(){
        var elemento;
    elemento=document.getElementById("resultado");
    elemento.value = elemento.value + ".";
}
window.onload=agregareventos;