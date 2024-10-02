let p = document.getElementById("resposta");
let button = document.getElementById("imprimir");
button.addEventListener("click",imprimirVariavel);

function imprimirVariavel(){
    p.textContent =  document.getElementById("entrada").value;
}
