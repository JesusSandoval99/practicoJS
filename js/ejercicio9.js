let frase = prompt("Digite un frase para contar las vocales que contiene");
let cantidadDeVocales = 0;
frase = frase.toLowerCase()

for(let i = 0; i < frase.length; i++){
    switch(frase.charAt(i)){
        case "a":
            cantidadDeVocales += 1;
        break;
        case "e":
            cantidadDeVocales += 1;
        break;
        case "i":
            cantidadDeVocales += 1;
        break;
        case "o":
            cantidadDeVocales += 1;
        break;
        case "u":
            cantidadDeVocales += 1;
        break;
        default:
        break
    }
}

document.write("La frase '"+frase+"' tiene "+cantidadDeVocales+" vocales.")