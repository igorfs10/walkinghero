function comecarBatalha(){
	if(!batalhando){
		local = txtMapa.innerHTML;
		if(local != "Cidade"){
			sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if(sorteio < 20){
				batalhando = true;
				inimigo = escolherInimigo(local);
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
		txtStatus.innerHTML = "Você derrotou " + inimigo.nome + " " + inimigo.experiencia;
		jogador.experiencia = jogador.experiencia + inimigo.experiencia;
		batalhando = false;
	}
}

function inimigoAtaca(){
}