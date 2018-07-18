function comecarBatalha(){
	if(!batalhando){
		local = txtMapa.innerHTML;
		if(local != "Cidade"){
			sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if(sorteio < 20){
				batalhando = true;
				inimigo = escolherInimigo(local);
				txtStatus.innerHTML = `${inimigo.nome} apareceu.`;
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
	dano = jogador.ataque - inimigo.defesa;
	if(dano < 1) {
		dano = 1;
	}
	inimigo.vida = inimigo.vida - dano;
	if(inimigo.vida < 1){
		experienciaGanha = 0;
		if(item4Ativo){
			experienciaGanha = inimigo.experiencia * 2;
		} else {
			experienciaGanha = inimigo.experiencia;
		}
		jogador.experiencia = jogador.experiencia + experienciaGanha;
		txtStatus.innerHTML = `${inimigo.nome} derrotado. Ganhou ${experienciaGanha} de experiência.`;
		batalhando = false;
		pegarNivel();
	}
}

function inimigoAtaca(){
	dano = inimigo.ataque - jogador.defesa;
	if(dano < 1) {
		dano = 1;
	}
	atualVida.innerHTML = parseInt(atualVida.innerHTML) - dano;
	if(parseInt(atualVida.innerHTML) < 1){
		pararJogo();
		iniciarJogo();
		txtStatus.innerHTML = `Você foi derrotado pelo ${inimigo.nome}.`;
	}
}