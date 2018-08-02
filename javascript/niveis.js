"use strict";
let txtNivel = document.getElementById("txtNivel"),
	txtExperiencia = document.getElementById("txtExperiencia"),
	txtExperienciaProximo = document.getElementById("txtExperienciaProximo"),
	nivelJogador,
	experiencia,
	experienciaProximo;

function pegarNivel(){
	experiencia = jogador.experiencia;
	for (nivelJogador = 0; experiencia >= NIVEIS[nivelJogador]; nivelJogador++){}
	experienciaProximo = NIVEIS[nivelJogador];
	txtNivel.innerText = nivelJogador;
	txtExperiencia.innerText = experiencia;
	txtExperienciaProximo.innerText = experienciaProximo;
}

function apagarNivel(){
	txtNivel.innerText = "";
	txtExperiencia.innerText = "";
	txtExperienciaProximo.innerText = "";
}