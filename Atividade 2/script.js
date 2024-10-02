
//Exercicio 2 -----------------------------------------------------------------------------
let elementos = ['Agua','Fogo','Ar','Terra'];

for (let indice in elementos){
    document.write('<p>'+elementos[indice]+'</p>')
}

for (let elemento of elementos){
    document.write('<p>'+elemento+'</p>')
}

//Exercicio 3 -----------------------------------------------------------------------------
let i =0;
let numeroo = prompt('Exercicio 3 - insira um valor');
while(numeroo<=10){
    document.write('<p>Linha '+i+'</p>');
    i++;
    numeroo++;
}

//Exercicio 4 -----------------------------------------------------------------------------
let vetor = [];
let contador = 0;
let numero = parseInt(prompt("Exercicio 4 - Informe um numero de 2 a 18: "));

function validarNum(numero) {
    return numero >= 2 && numero <= 18;
}

if (validarNum(numero)) {
    let par = 2; 
    do {
        vetor.push(par);
        par += 2;
        contador+=2 ;
    } while (contador < numero);

    document.write('<p>' + vetor + '</p>');
} else {
    alert("numero invalido, insira um numero entre 2 e 18.");
}

//Exercicio 5 -----------------------------------------------------------------------------
let frase = prompt('Exercicio 5 - Informe uma frase:');
let frases = [];

function processarFrase(frase) {
    let maiuscula = frase.toUpperCase();
    let invertida = frase.split('').reverse().join('');
    let tamanho = frase.length;

    frases.push(maiuscula);
    frases.push(invertida);
    frases.push(tamanho);

    return frases;
}

let resultado = processarFrase(frase);
document.write('<p>' + resultado.join(', ') + '</p>');