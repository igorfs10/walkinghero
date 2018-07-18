"use strict";
var txtMapa = document.getElementById("txtMapa"),
	linhaCenario = document.getElementById("linhaCenario"),
	setaEsquerda = document.getElementById("setaEsquerda"),
	setaDireita = document.getElementById("setaDireita"),
	mapas = [];

var	mapaDados = {
		numero : 0,
		nome : "?????",
		imagem: ""
	};
mapas.push(mapaDados);

var	mapaDados = {
		numero : 1,
		nome : "Cidade",
		imagem: "url(imagens/mapas/cidade.jpg)"
	};
mapas.push(mapaDados);

var	mapaDados = {
		numero : 2,
		nome : "Floresta",
		imagem: "url(imagens/mapas/floresta.jpg)"
	};
mapas.push(mapaDados);

var primeiro = 1,
	ultimo = mapas.length - 1,
	atual = 0;

function mudarMapa(numero){
	txtMapa.innerText = mapas[numero].nome;
	linhaCenario.style.backgroundImage = mapas[numero].imagem;
}

function inicialMapa(){
	mudarMapa(1);
}

function proximoMapa(){
	if(jogando && !batalhando){
		for(atual = 0; mapas[atual].nome !== txtMapa.innerText; atual++){}
		if(atual === ultimo){
			txtStatus.innerText = "Esse é o ultimo local.";
		} else {
			mudarMapa(atual + 1);
			setaEsquerda.style.display = "block";
			if(atual + 1 === ultimo){
				setaDireita.style.display = "none";
			}
		}
	} else if(batalhando){
		txtStatus.innerText = "Não pode mudar o local enquanto batalha.";
	}
}

function anteriorMapa(){
	if(jogando && !batalhando){
		for(atual = 0; mapas[atual].nome !== txtMapa.innerText; atual++){}
		if(atual === primeiro){
			txtStatus.innerText = "Esse é o primeiro local.";
		} else {
			mudarMapa(atual - 1);
			setaDireita.style.display = "block";
			if(atual - 1 === primeiro){
				setaEsquerda.style.display = "none";
			}
		}
	} else if(batalhando){
		txtStatus.innerText = "Não pode mudar o local enquanto batalha.";
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