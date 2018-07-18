"use strict";
let txtNivel = document.getElementById("txtNivel"),
	txtExperiencia = document.getElementById("txtExperiencia"),
	txtExperienciaProximo = document.getElementById("txtExperienciaProximo"),
	nivel = [
		-1,
		10,
		100,
		1000,
		10000,
		100000
	];

function pegarNivel(){
	let nivelJogador,
		experiencia = jogador.experiencia,
		experienciaProximo;
	for (nivelJogador = 0; experiencia >= nivel[nivelJogador]; nivelJogador++){
	}
	experienciaProximo = nivel[nivelJogador];
	txtNivel.innerText = nivelJogador;
	txtExperiencia.innerText = experiencia;
	txtExperienciaProximo.innerText = experienciaProximo;
}

function apagarNivel(){
	txtNivel.innerText = "";
	txtExperiencia.innerText = "";
	txtExperienciaProximo.innerText = "";
}