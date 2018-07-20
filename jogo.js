"use strict";
let tempo = 0,
	jogando = false,
	batalhando = false,
	segundos = document.getElementById("txtSegundos"),
	minutos = document.getElementById("txtMinutos"),
	horas = document.getElementById("txtHoras"),
	dias = document.getElementById("txtDias"),
	txtStatus = document.getElementById("txtStatus"),
	personagemJogador = document.getElementById("personagemJogador"),
	personagemInimigo = document.getElementById("personagemInimigo"),
	jogador,
	inimigo,
	jogo,
	dia,
	hora,
	minuto,
	segundo;
	
function converterTempo(){
	dia = Math.floor(tempo / (60 * 60 * 24)),
	hora = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)),
	minuto = Math.floor((tempo % (60 * 60)) / 60),
	segundo  = Math.floor((tempo % 60));
	
	if(segundo < 10){
		segundos.innerText = "0" + segundo;
	} else {
		segundos.innerText = segundo;
	}
	if(minuto < 10){
		minutos.innerText = "0" + minuto;
	} else {
		minutos.innerText = minuto;
	}
	if(hora < 10){
		horas.innerText = "0" + hora;
	} else {
		horas.innerText = hora;
	}
	dias.innerText = dia;
}
	
function execucaoJogo(){
	tempo = tempo + 1;
	converterTempo();
	if(txtMapa.innerText === "Cidade" && parseInt(atualVida.innerText) < parseInt(totalVida.innerText)){
		atualVida.innerText = parseInt(atualVida.innerText) + 1;
	}
	comecarBatalha();
	if(batalhando){
		batalha();
	}
	acharItem();
	jogo = setTimeout(execucaoJogo, 1000);
}

function novoJogo(){
	pararJogo();
	tempo = 0;
	converterTempo();
	apagarStatusPersonagem();
	apagarQuantidadeItens();
	apagarNivel();
	mostrarPersonagens();
	desaparecerSetas();
}

function comecarJogo(nomePersonagem){
	escolherPersonagem(nomePersonagem);
	iniciarJogo();
}

function salvarJogo(){
	if(jogando === true){
		localStorage.setItem("nomeSalvo", txtNome.innerText);
		localStorage.setItem("tempoSalvo", tempo);
		localStorage.setItem("jogador", JSON.stringify(jogador));
	} else {
		txtStatus.innerText = "Precisa estar jogando para sallet o jogo.";
	}
}

function carregarJogo(){
	if (isNaN(parseInt(localStorage.getItem("tempoSalvo")))){
		txtStatus.innerText = "Não existe jogo salvo";
	} else {
		pararJogo();
		tempo = parseInt(localStorage.getItem("tempoSalvo"));
		jogador = JSON.parse(localStorage.getItem("jogador"));
		iniciarJogo();
	}
}

function iniciarJogo(){
	personagemEscolhido();
	jogando = true;
	andando();
	inicialMapa();
	aparecerSetas();
	jogo = setTimeout(execucaoJogo, 1);
	txtNome.innerText = jogador.nome;
	atualVida.innerText = jogador.vida;
	colocarStatusPersonagem();
	colocarQuantidadeItens();
	pegarNivel();
}

function pararJogo(){
	if(jogando){
		pararAnimacao();
	}
	batalhando = false;
	clearTimeout(jogo);
	desativarItem1();
	desativarItem2();
	desativarItem3();
	desativarItem4();
	desativarItem5();
	desativarItem6();
}

function sortearNumero(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}