var numero=Number(Math.trunc(Math.random()*100));
var adivina, intentos=0;
adivina=Number(prompt("Adivina el número del 0 al 100"));
intentos=intentos+1;
while(adivina!=numero){
if(adivina>numero){
	adivina=Number(prompt("El número a adivinar es menor"));
	intentos=intentos+1;
}else if (adivina<numero){
	adivina=Number(prompt("El número a adivinar es mayor"));
	intentos=intentos+1;
}
}
if (adivina==numero){
	alert("Acertaste...!!!!. Has necesitado " + intentos + " intentos.");
}
