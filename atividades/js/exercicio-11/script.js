const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  titulo.innerText = "Título Alterado";
  titulo.style.color = "blue";
});
