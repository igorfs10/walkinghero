function comecarBatalha(){
	if(!batalhando){
		local = txtMapa.innerHTML;
		if(local != "Cidade"){
			sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if(sorteio < 20){
				batalhando = true;
				inimigo = escolherInimigo(local);
				txtStatus.innerHTML = inimigo.nome + " apareceu.";
			}
		}
	}
}

function batalha(){
	if(tempo%4 == 0){
		jogadorAtaca();
		atualizarJogo();
	}
	if(tempo%4 == 2){
		inimigoAtaca();
		atualizarJogo();
	}
}

function jogadorAtaca(){
	dano = jogador.ataque - inimigo.defesa;
	if(dano < 1) {
		dano = 1;
	}
	inimigo.vida = inimigo.vida - dano;
	if(inimigo.vida < 1){
		if(item4Ativo){
			txtStatus.innerHTML = "Você derrotou " + inimigo.nome + " " + inimigo.experiencia * 2;
			jogador.experiencia = jogador.experiencia + inimigo.experiencia * 2
		} else {
			txtStatus.innerHTML = "Você derrotou " + inimigo.nome + " " + inimigo.experiencia;
			jogador.experiencia = jogador.experiencia + inimigo.experiencia;
		}
		batalhando = false;
	}
}

function inimigoAtaca(){
}