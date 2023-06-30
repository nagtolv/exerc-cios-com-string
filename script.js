// Exercícios com strings 1.1.
// Cadastro:
const name = prompt("Digite seu nome completo");
const email = prompt("Digite seu email");
// Irá imprimir na tela do navegador:
document.body.innerHTML = `Nome completo: <strong>${name}</strong> <br/>`;
document.body.innerHTML += `Email: <strong>${email}</strong> <br/>`;