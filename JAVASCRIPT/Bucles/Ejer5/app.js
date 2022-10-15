var factorial=1, num, cont=1;

num=Number(prompt("Introduce el numero del que quieres conocer el factorial"));
while(cont<=num){
	factorial=factorial*cont;
	cont=cont+1;
}
alert("El factorial de " + num + " es " + factorial);