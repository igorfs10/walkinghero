"use strict";
function comecarBatalha(){
	if(!batalhando){
		if(txtMapa.innerText !== "Cidade"){
			let sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if(sorteio < 20){
				batalhando = true;
				escolherInimigo(txtMapa.innerText);
				txtStatus.innerText = `${inimigo.nome} apareceu.`;
			}
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
	let dano = jogador.ataque - inimigo.defesa;
	if(dano < 1) {
		dano = 1;
	}
	inimigo.vida = inimigo.vida - dano;
	if(inimigo.vida < 1){
		let experienciaGanha = 0;
		if(item4Ativo){
			experienciaGanha = inimigo.experiencia * 2;
		} else {
			experienciaGanha = inimigo.experiencia;
		}
		jogador.experiencia = jogador.experiencia + experienciaGanha;
		txtStatus.innerText = `${inimigo.nome} derrotado. Ganhou ${experienciaGanha} de experiência.`;
		batalhando = false;
		pegarNivel();
	}
}

function inimigoAtaca(){
	let dano = inimigo.ataque - jogador.defesa;
	if(dano < 1) {
		dano = 1;
	}
	atualVida.innerText = parseInt(atualVida.innerText) - dano;
	if(parseInt(atualVida.innerText) < 1){
		pararJogo();
		iniciarJogo();
		txtStatus.innerText = `Você foi derrotado pelo ${inimigo.nome}.`;
	}
}