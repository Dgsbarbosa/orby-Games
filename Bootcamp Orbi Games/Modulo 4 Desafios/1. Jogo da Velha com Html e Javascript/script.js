var jogador = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');

var quadrados = document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolherQuadrado(id) {

   var quadrado = document.getElementById(id);
   if(quadrado.innerHTML !== '-'){
       return;
   }

   quadrado.innerHTML = jogador;
   quadrado.style.color = '#000'
   
   if(jogador === 'X'){
       jogador = 'O'
   }else{
       jogador = 'X'
   }

   mudarJogador(jogador)

}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor(){
    var quadrado = document.getElementById(1);
    var quadrado = document.getElementById(2);
    var quadrado = document.getElementById(3);
    var quadrado = document.getElementById(3);
    var quadrado = document.getElementById(4);
    var quadrado = document.getElementById(5);
    var quadrado = document.getElementById(6);
    var quadrado = document.getElementById(7);
    var quadrado = document.getElementById(8);
    var quadrado = document.getElementById(9);


}