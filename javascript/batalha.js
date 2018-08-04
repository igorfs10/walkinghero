"use strict";
let experienciaGanha,
	dano;
	
function comecarBatalha(){
	if(!batalhando && parseInt(txtMapa.dataset.numero) !== MAPA_CIDADE){
		sorteio = sortearNumero(1, 100);
		if(sorteio <= 20){
			batalhando = true;
			escolherInimigo(txtMapa.dataset.numero);
			txtStatus.innerText = TEXTO_INIMIGOAPARECEU();
		}
	}
}

function batalha(){
	if(tempo%4 == 0){
		jogadorAtaca();
	}
	if(tempo%4 == 2){
		inimigoAtaca();
	}
}

function jogadorAtaca(){
	dano = jogador.ataque - inimigo.defesa;
	sorteio = sortearNumero(1, 100);
	
	if(dano < 1) {
		dano = 1;
	}
	if (sorteio <= 30){
		dano = dano * 2;
		txtStatus.innerText = TEXTO_JOGADORCRITICO();
	}
	inimigo.vida = inimigo.vida - dano;
	if(inimigo.vida < 1){
		if(itemAtivo[ITEM_EXPERIENCIA]){
			experienciaGanha = inimigo.experiencia * 2;
		} else {
			experienciaGanha = inimigo.experiencia;
		}
		jogador.experiencia = jogador.experiencia + experienciaGanha;
		sorteio = sortearNumero(1, 100);
		if(sorteio <= 10){
			ganharItem(inimigo.item);
			txtStatus.innerText = TEXTO_DERROTOUINIMIGOITEM();
		}else{
			txtStatus.innerText = TEXTO_DERROTOUINIMIGO();
		}
		batalhando = false;
		pegarNivel();
	}
}

function inimigoAtaca(){
	dano = inimigo.ataque - jogador.defesa;
	sorteio = sortearNumero(1, 100);
	
	if(dano < 1) {
		dano = 1;
	}
	if (sorteio <= 10){
		dano = dano * 2;
		txtStatus.innerText = TEXTO_INIMIGOCRITICO();
	}
	atualVida.innerText = parseInt(atualVida.innerText) - dano;
	if(parseInt(atualVida.innerText) < 1){
		pararJogo();
		iniciarJogo();
		txtStatus.innerText = TEXTO_DERROTADO();
	}
}