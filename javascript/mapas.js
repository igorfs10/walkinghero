"use strict";
let txtMapa = document.getElementById("txtMapa"),
	linhaCenario = document.getElementById("linhaCenario"),
	setaEsquerda = document.getElementById("setaEsquerda"),
	setaDireita = document.getElementById("setaDireita"),
	mapaAtual;

function mudarMapa(numeroMapa){
	txtMapa.innerText = MAPAS[numeroMapa].nome;
	txtMapa.dataset.numero = numeroMapa;
	linhaCenario.style.backgroundImage = MAPAS[numeroMapa].imagem;
}

function mapaInicial(){
	mudarMapa(MAPA_CIDADE);
}

function proximoMapa(){
	if(jogando && !batalhando){
		for(mapaAtual = 0; MAPAS[mapaAtual].nome !== txtMapa.innerText; mapaAtual++){}
		if(mapaAtual === ULTIMOMAPA){
			txtStatus.innerText = TEXTO_ULTIMOLOCAL;
		} else {
			mudarMapa(mapaAtual + 1);
			setaEsquerda.style.display = "block";
			if(mapaAtual + 1 === ULTIMOMAPA){
				setaDireita.style.display = "none";
			}
		}
	} else if(batalhando){
		txtStatus.innerText = TEXTO_MUDARMAPABATALHA;
	}
}

function anteriorMapa(){
	if(jogando && !batalhando){
		for(mapaAtual = 0; MAPAS[mapaAtual].nome !== txtMapa.innerText; mapaAtual++){}
		if(mapaAtual === PRIMEIROMAPA){
			txtStatus.innerText = TEXTO_PRIMEIROLOCAL;
		} else {
			mudarMapa(mapaAtual - 1);
			setaDireita.style.display = "block";
			if(mapaAtual - 1 === PRIMEIROMAPA){
				setaEsquerda.style.display = "none";
			}
		}
	} else if(batalhando){
		txtStatus.innerText = TEXTO_MUDARMAPABATALHA;
	}
}

function aparecerSetas(){
	setaDireita.style.display = "block";
	setaEsquerda.style.display = "none";
}

function desaparecerSetas(){
	setaDireita.style.display = "none";
	setaEsquerda.style.display = "none";
}