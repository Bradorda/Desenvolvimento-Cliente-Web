
//Exercicio 2 -----------------------------------------------------------------------------
let elementos = ['Agua','Fogo','Ar','Terra'];

/*Percorre os indices do array, que são utilizados para acessar os valores do array elementos*/
for (let indice in elementos){
    document.write('<p>'+elementos[indice]+'</p>')
}
/*Percorre diretamente os valores do array sem precisar usar incices */
for (let elemento of elementos){
    document.write('<p>'+elemento+'</p>')
}

//Exercicio 3 -----------------------------------------------------------------------------
/*
Incializa uma variavel i (indice) atrinbuindo o valor 0, 
A variavél numeroo(contador) guarda o valor informado pelo  usuario através do prompt.

Enquanto o numeroo(contador) for menor ou igual a 10{
escreve um paragrafo, com o conteudo Linha e valor da variavél i
incrementa o valor da variavel i (indice que será impresso)
incrementa o valor da variavel numeroo (contador)
repete o processo, Enquanto...
}
*/
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
