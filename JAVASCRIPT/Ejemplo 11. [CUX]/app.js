var opción;
while(opción!=5){
opción=parseInt(prompt("Pulsa: \n 1. Para sumar.\n 2. Para restar.\n 3. Para multiplicar.\n 4. Para multiplicar.\n 5. Para salir."));
    if(opción==1){
        suma=parseInt(prompt("Introduzca el primer número para sumar"));
        suma2=parseInt(prompt("Introduzca el segundo número para sumar"));
        alert("La suma de los dos números introducidos es " + (suma+suma2));
    }else if(opción==2){
        resta=parseInt(prompt("Introduzca el primer número para restar"));
             resta2=parseInt(prompt("Introduzca el segundo número para restar"));
       alert("La resta de los dos números es "+ (resta-resta2));
    }else if(opción==3){
        multiplicación=parseInt(prompt("Introduzca el primer número para multiplicar"));
        multiplicación2=parseInt(prompt("Introduzca el segundo número para multiplicar"));
         alert("La multiplicación de los dos números es "+ (multiplicación*multiplicación2));
}else if(opción==4){
        división=parseInt(prompt("Introduzca el primer número para dividir"));
        división2=parseInt(prompt("Introduzca el segundo número para dividir"));
         alert("La división de los dos números es "+ (división/división2));
}else if(opción!=5){
        alert("El número que ha introducido no se encuentra dentro de las opciones");
    };
}