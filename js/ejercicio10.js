let numEvaluar = prompt("Digite un número para determinar si es divisible por 2,3,5 o 7.")

if(numEvaluar % 2 === 0 || numEvaluar % 3 === 0 || numEvaluar % 5 === 0 || numEvaluar % 7 === 0){
    document.write("El número ingresado es divisible al menos por un número de la lista")
}else{
    document.write("El número ingresado NO es divisible por ninguno de la lista");
}