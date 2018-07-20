"use strict";
function comecarBatalha(){
	if(!batalhando && txtMapa.innerText !== "Cidade"){
		const sorteio = sortearNumero(1, 100);
		if(sorteio <= 20){
			batalhando = true;
			escolherInimigo(txtMapa.innerText);
			txtStatus.innerText = `${inimigo.nome} apareceu.`;
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
	let experienciaGanha,
		dano = jogador.ataque - inimigo.defesa;
		
	const sorteio = sortearNumero(1, 100);
	
	if(dano < 1) {
		dano = 1;
	}
	if (sorteio <= 30){
		dano = dano * 2;
		txtStatus.innerText = `${jogador.nome} deu um golpe crítico.`;
	}
	inimigo.vida = inimigo.vida - dano;
	if(inimigo.vida < 1){
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
	
	const sorteio = sortearNumero(1, 100);
	
	if(dano < 1) {
		dano = 1;
	}
	if (sorteio <= 10){
		dano = dano * 2;
		txtStatus.innerText = `${inimigo.nome} deu um golpe crítico.`;
	}
	atualVida.innerText = parseInt(atualVida.innerText) - dano;
	if(parseInt(atualVida.innerText) < 1){
		pararJogo();
		iniciarJogo();
		txtStatus.innerText = `Você foi derrotado pelo ${inimigo.nome}.`;
	}
}