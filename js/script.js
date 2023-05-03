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


const btn = document.getElementById("meu-btn");


//PRIMEIRO PASSO PARA A TRANSFORMAÇÃO DO BOTÃO EM RGB...
btn.addEventListener("click", function(){
    //console.log(btn.textContent)
    //Função matemática Math
    //random = retorna um numero aleatório entre 0 e 1. EX: 0.2548545
    //floor = arredonda o número para baixo
    //ceil = arredonda o número para cima
    //round = arredonda um número aleatório
    let r=0, g=0, b=0;
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`)

});
