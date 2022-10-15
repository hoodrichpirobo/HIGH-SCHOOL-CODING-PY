var factorial=1, num, cont=1;

num=Number(prompt("Introduce el numero dl que quieres conocer el factorial"));
for(cont=1; cont<=num; cont=cont+1){
	factorial=factorial*cont;
}
alert("El factorial del numero " + num + " es " + factorial);