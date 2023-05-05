"use strict";
// console.log("Olá Mundo!")


// var nr1 = "10";
// var nr2 = "5";

// console.log(parseInt(nr1) + parseInt(nr2))

//var nome1 = "Dubas";
//let nome2 = "Serbatinho";
//const nome3 = "Julia";

//console.log(nome)
//if (nome1 != "") {
//    var nome1 = "Julia";
//}


//console.log(nome1);


// const btn = document.getElementById("meu-btn");


// //PRIMEIRO PASSO PARA A TRANSFORMAÇÃO DO BOTÃO EM RGB...
// btn.addEventListener("click", function(){
//     //console.log(btn.textContent)
//     //Função matemática Math
//     //random = retorna um numero aleatório entre 0 e 1. EX: 0.2548545
//     //floor = arredonda o número para baixo
//     //ceil = arredonda o número para cima
//     //round = arredonda um número aleatório
//     let r=0, g=0, b=0;
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
    
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`)

// });

// const h2Element = document.querySelector(".tit-sec");
// console.log(h2Element);

//querySelectorAll()

//Declaração de um array e seus métodos
let frutas = ["banana", "maçã", "laranja", "morango", "uva", "amora", "cereja", "abacaxi"];
console.log(frutas);
console.log(frutas[7]);
//Verificando o tamanho do array através da propriedade length
console.log(`Tamanho do Array é ${frutas.length}`)
//Inserindo um item ao final do Array com o método push(nome do item)
frutas.push("pêssego");
console.log(frutas);
//Inserindo um item ao início do Array com o método unshift(nome do item)
frutas.unshift("kiwi");
console.log(frutas);
//Removendo um item ao final do Array com o método pop();
frutas.pop();
console.log(frutas);
//Removendo um item no inicio do Array com o método shift();
frutas.shift();
console.log(frutas);
//Localizando um item no Array com o método indexOf(nomeItem);
//Obs: O método indexOf(nomeItem) retorna o indice do item.
// let indice = frutas.indexOf("uva");
// console.log(`Indice do item buscado ${indice}`);
// console.log(`Elemento buscado ${frutas[indice]}`);

//Removendo um item do Array com o método splice(indice do item, qtd de vezes que o indice será removido!)
//Obs: Utilize o método indexOf(nomeItem) para descobrir o indice do item.
let indice = frutas.indexOf("amora");
console.log(`Elemento no indice antes da remoção: ${frutas[indice]}`);
frutas.splice(indice, 1);
console.log(frutas);
console.log(`Elemento no indice depois da remoção: ${frutas[indice]}`);