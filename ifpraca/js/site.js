


var vetorCol = document.getElementsByClassName('tabela-col');
var i = 0;
var j = 0;
var igual = true;
var popup = document.getElementById("pop-up");

var log = "Iniciar algoritmo\n";


var galinha = '<img src="./imagem/galinha.png" class="galinha">';
var ninho = '<img src="./imagem/ninho.png" class="galinha" id="winner">';

var checkers = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (i = 0; i < vetorCol.length; i++) {
  vetorCol[i].id = "a" + i;
}


do {

  var nestPost = getRandomInt(25);
  var chickenPost = getRandomInt(25);

  if (nestPost == chickenPost) {
    igual = true;
  } else {
    igual = false;
  }

} while (igual);

var postChicken = document.getElementById("a" + chickenPost);
var postNest = document.getElementById("a" + nestPost);

postChicken.style.backgroundColor = "#FF0000";
postNest.style.backgroundColor = "#00FF00";

var setaEsq = document.getElementById("setaEsq");
var setaDir = document.getElementById("setaDir");
var noventaEsq = document.getElementById("noventaEsq");

postChicken.innerHTML = galinha;
postNest.innerHTML = ninho;

var linhaChicken = 0;
var linhaNest = 0;

function checkWin() {

  var oNinho = document.getElementById("winner");


  if (postNest.contains(oNinho)) {
    return true;
  } else {
    popup.style.display = "block";
    log += "Obteve o ninho!\nTerminar algoritmo";
  }

}

if (chickenPost >= 0 && chickenPost <= 4) {
  linhaChicken = 0;
}
if (chickenPost >= 5 && chickenPost <= 9) {
  linhaChicken = 1;
}
if (chickenPost >= 10 && chickenPost <= 14) {
  linhaChicken = 2;
}
if (chickenPost >= 15 && chickenPost <= 19) {
  linhaChicken = 3;
}
if (chickenPost >= 20 && chickenPost <= 24) {
  linhaChicken = 4;
}

// check do nest

if (nestPost >= 0 && nestPost <= 4) {
  linhaNest = 0;
}
if (nestPost >= 5 && nestPost <= 9) {
  linhaNest = 1;
}
if (nestPost >= 10 && nestPost <= 14) {
  linhaNest = 2;
}
if (nestPost >= 15 && nestPost <= 19) {
  linhaNest = 3;
}
if (nestPost >= 20 && nestPost <= 24) {
  linhaNest = 4;
}

var colunaChicken = chickenPost % 5;
var colunaNest = nestPost % 5;

checkers[linhaChicken][colunaChicken] = 2;
checkers[linhaNest][linhaNest] = 1;

var switchSeta = 0;

setaEsq.addEventListener("click", function () {

  if (switchSeta == 0) {

    if (colunaChicken > 0) {

      var galinha = '<img src="./imagem/galinha.png" class="galinha">';

      postChicken.innerHTML = ""; // tira a galinha da posição antiga

      colunaChicken = colunaChicken - 1; // encontra a coluna a qual deve se ir
      chickenPost = chickenPost - 1; // encontra a nova posição

      postChicken = document.getElementById("a" + chickenPost); // coleta a nova posição
      postChicken.innerHTML = galinha; // coloca a galinha lá

      log += "Mover a galinha para trás\n";

    }

  } else {

    if (linhaChicken > 0) {

      var galinha = '<img src="./imagem/galinhaCima.png" class="galinha">';

      postChicken.innerHTML = ""; // tira a galinha da posição antiga

      linhaChicken = linhaChicken - 1; // encontra a coluna a qual deve se ir
      chickenPost = chickenPost - 5; // encontra a nova posição

      postChicken = document.getElementById("a" + chickenPost); // coleta a nova posição

      postChicken.innerHTML = galinha; // coloca a galinha lá

      log += "Mover a galinha para cima\n";

    }

  }

  // alert("a"+chickenPost);



  checkWin("a" + chickenPost);

});

setaDir.addEventListener("click", function () {


  if (switchSeta == 0) {

    if (colunaChicken < 4) {
      var galinha = '<img src="./imagem/galinhaInvertida.png" class="galinha">';
      postChicken.innerHTML = ""; // tira a galinha da posição antiga

      colunaChicken = colunaChicken + 1; // encontra a coluna a qual deve se ir
      chickenPost = chickenPost + 1; // encontra a nova posição

      postChicken = document.getElementById("a" + chickenPost); // coleta a nova posição
      postChicken.innerHTML = galinha; // coloca a galinha lá

      log += "Mover a galinha para frente\n";

    }

  } else {

    if (linhaChicken < 4) {
      var galinha = '<img src="./imagem/galinhaBaixo.png" class="galinha">';

      postChicken.innerHTML = ""; // tira a galinha da posição antiga

      linhaChicken = linhaChicken + 1; // encontra a coluna a qual deve se ir
      chickenPost = chickenPost + 5; // encontra a nova posição

      postChicken = document.getElementById("a" + chickenPost); // coleta a nova posição

      postChicken.innerHTML = galinha; // coloca a galinha lá
      log += "Mover a galinha para baixo\n";

    }

  }

  // alert("a"+chickenPost);
 checkWin("a" + chickenPost);

});

var setaOri = document.getElementById("seta");
var setaEsq1 = document.getElementById("seta-img");
var setaDir1 = document.getElementById("seta1");
var textoOri = document.getElementById("orientation");



noventaEsq.addEventListener("click", function () {

  if (switchSeta == 0) {

    setaOri.src = "imagem/setaParaVertical.png";
    textoOri.innerText = "";
    textoOri.innerText = "Vertical";
    setaEsq1.src = "imagem/setaUp.png";
    setaDir1.src = "imagem/setaDown.png";

    switchSeta = 1;
    log += "Alterar a galinha para se mover na vertical\n";
  } else {

    setaOri.src = "imagem/setaParaHorizontal.png";
    textoOri.innerText = "";
    textoOri.innerText = "Horizontal";
    setaEsq1.src = "imagem/setaEsq.png";
    setaDir1.src = "imagem/setaDir.png";


    switchSeta = 0;

    log += "Alterar a galinha para se mover na horizontal\n";

  }

});

var a = document.getElementById("a");
var ab = document.getElementById("b");
var abc = document.getElementById("dormir");

a.addEventListener("click", function () {
  window.location.href = "https://github.com/ronaldofilhoifc-code";
});
function funcao() {
  window.location.href = "https://www.instagram.com/ifc.oficial.sbs/";
}

ab.addEventListener("click", function () {

  var l = '<textarea class="subs" id="subs"></textarea>';
  abc.innerHTML = "";
  abc.innerHTML = l;

  console.log(log);

  document.getElementById("subs").value = log;


});

