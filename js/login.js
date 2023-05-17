//O que é um evento?
//Um evento é uma ação que ocorre seja ela feita, pelo usuário ou sistema:

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");
const eyePass = document.querySelector(".fa-eye");

// input.addEventListener("focus", () => {
//   input.style.outlineColor = "red";
// })

inputSenha.addEventListener("keyup", () => {
  if(inputSenha.value.length < 5){
    inputSenha.setAttribute("style", "outline-color: red");
    userLabel.setAttribute("style", "color: red");
  } else {
    inputSenha.setAttribute("style", "outline-color: green");
    userLabel.setAttribute("style", "color: green");
  }
})



inputUser.addEventListener("keyup", () => {
  if(inputUser.value.length < 5){
    inputUser.setAttribute("style", "outline-color: red");
    userLabel.setAttribute("style", "color: red");
  } else {
    inputUser.setAttribute("style", "outline-color: green");
    userLabel.setAttribute("style", "color: green");
  }
})

eyePass.addEventListener("click", () => {
  // if(inputSenha.type == "password"){
  //   inputSenha.type = "text";
  // } else {
  //   inputSenha.type = "password";
  // }

  if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type", "text");
    eyePass.setAttribute("class", "fa fa-eye-slash");
  } else {
    inputSenha.setAttribute("type", "password");
    eyePass.setAttribute("class", "fa fa-eye");
  }
})