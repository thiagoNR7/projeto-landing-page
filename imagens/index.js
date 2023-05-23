var SetaEsquerda = window.document.getElementById("seta-esquerda");
var leonardo = window.document.getElementById("leornado");
var bruna = window.document.getElementById("bruna");
var samantha = window.document.getElementById("samantha");
var SetaDireita = window.document.getElementById("seta-direita");

function RolarParaDireita() {
  bruna.style = "display:none";
  samantha.style = "display:flex";
  SetaEsquerda.style = "display:flex";
  SetaDireita.style = "display:none";
}

function RolarParaEsquerda() {
  bruna.style = "display:flex";
  samantha.style = "display:none";
  SetaEsquerda.style ="display:none";
  SetaDireita.style ="display:flex";
}
