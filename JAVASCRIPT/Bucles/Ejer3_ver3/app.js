var numero_aleatorio = Math.round(Math.random() * 50);
var acabar = 0;
var numero;
alert ("Bienvenido a GUESS THE GAME, pulsa aceptar para jugar.")
while (acabar < 1){
	numero = Number(prompt("Introduce un numero"));
	if (numero < numero_aleatorio){
		alert("El numero " + numero + " es más pequeño, prueba uno mas grande.");
	}
	else if (numero > numero_aleatorio){
		alert("El numero " + numero + " es más grande, prueba uno mas pequeño.");
	}else if (numero == numero_aleatorio){
		alert("Has acertado, el numero secreto era: " + numero_aleatorio);
		seguir = prompt("¿Quieres volver a jugar? \nSi quieres continuar escribe (s)");
		if (seguir.toLowerCase() == 's'){
			
		}
		else {
			acabar = 2;
		}
	}
}