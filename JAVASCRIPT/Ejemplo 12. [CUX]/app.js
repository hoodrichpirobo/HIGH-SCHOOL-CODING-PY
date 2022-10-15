var N;
N=parseInt(prompt("Introduzca su temperatura en ºC"));
alert("Su temperatura convertida son "+ ((N*9/5)+32)+ " ºF");
if ((N>=-10)&&(N<=0)){
    alert("Temperatura baja");
}else ((N>0)&&(N<=20)){
    alert("Temperatura adecuada");
}else ((N>20)&&(N<=35,5556)){
    alert("Temperatura alta");
}else {
    alert ("Temperatura desconocida");
}