let numUno = parseInt(prompt("Digite el valor del primer número"));
let numDos = parseInt(prompt("Digite el valor del segundo número"));
let numTres = parseInt(prompt("Digite el valor del tercer número"));

if(numUno > numDos && numUno > numTres){
    document.write("El número "+numUno+" es el mayor");
}else if( numDos > numUno && numDos > numTres){
    document.write("El número "+numDos+" es el mayor");
}else{
    document.write("El número "+numTres+" es el mayor");
}