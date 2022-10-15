var N, N2=1;
while (N2!=0){
N=parseInt(prompt("Introduzca su temperatura en ºC"));
alert("Su temperatura convertida son "+ ((N*9/5)+32)+ " ºF");
if ((N>=-10)&&(N<=0)){
    alert("Temperatura baja");
}else if((N>0)&&(N<=20)){
    alert("Temperatura adecuada");
}else if((N>20)&&(N<=35,5556)){
    alert("Temperatura alta");
}else {
    alert ("Temperatura desconocida");break;
}
}