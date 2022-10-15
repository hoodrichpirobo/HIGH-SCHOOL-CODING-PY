var aleatorio=Math.trunc(Math.random()*10);
var adivina=1;
while(adivina!=aleatorio){
	adivina=Number(prompt("Introduce un número"));
	if (aleatorio<adivina){
		adivina=Number(prompt("El número que debes adivinar es menor. Introduce otro número"));
	}else if(aleatorio>adivina){
		adivina=Number(prompt("El número que debes adivinar es mayor. Introduce otro número"));
	}
if (adivina==aleatorio){
	alert("Adivinaste!!!");
}
}