"use strict";
let imagem = "",
	animacao,
	jogadorImagem = document.getElementById("jogadorImagem"),
	inimigoImagem = document.getElementById("inimigoImagem"),
	txtNome = document.getElementById("txtNome"),
	atualVida = document.getElementById("atualVida"),
	totalVida = document.getElementById("totalVida"),
	totalAtaque = document.getElementById("totalAtaque"),
	bonusAtaque = document.getElementById("bonusAtaque"),
	totalDefesa = document.getElementById("totalDefesa"),
	bonusDefesa = document.getElementById("bonusDefesa"),
	totalAtaqueMagico = document.getElementById("totalAtaqueMagico"),
	bonusAtaqueMagico = document.getElementById("bonusAtaqueMagico"),
	totalDefesaMagica = document.getElementById("totalDefesaMagica"),
	bonusDefesaMagica = document.getElementById("bonusDefesaMagica");
	
function escolherPersonagem(nomePersonagem){
	if(nomePersonagem === "Guerreiro"){
		jogador = {
		numero : 1,
		nome : "Guerreiro",
		vida : 10,
		ataque : 3,
		defesa : 3,
		ataqueMagico: 2,
		defesaMagica: 2,
		imagemParado: "imagens/guerreiro/1.png",
		imagemAndando: "imagens/guerreiro/2.png",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0,
		item: [5,5,5,5,5,5]
		};
	} else if(nomePersonagem === "Mago"){
		jogador = {
		numero : 2,
		nome : "Mago",
		vida : 10,
		ataque : 2,
		defesa : 2,
		ataqueMagico: 3,
		defesaMagica: 3,
		imagemParado: "",
		imagemAndando: "",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0,
		item: [5,5,5,5,5,5]
		};
	}
}
	
function colocarStatusPersonagem(){
	totalVida.innerText = jogador.vida;
	totalAtaque.innerText = jogador.ataque;
	totalDefesa.innerText = jogador.defesa;
	totalAtaqueMagico.innerText = jogador.ataqueMagico;
	totalDefesaMagica.innerText = jogador.defesaMagica;
}

function atualizarAtaque(){
	if(itemAtivo[1]){
		bonusAtaque.innerText =  Math.floor(jogador.ataque / 2);
		totalAtaque.innerText = jogador.ataque + parseInt(bonusAtaque.innerText);
	} else {
		bonusAtaque.innerText = "";
		totalAtaque.innerText = jogador.ataque;
	}
}

function atualizarDefesa(){
	if(itemAtivo[2]){
		bonusDefesa.innerText =  Math.floor(jogador.defesa / 2);
		totalDefesa.innerText = jogador.defesa + parseInt(bonusDefesa.innerText);
	} else {
		bonusDefesa.innerText = "";
		totalDefesa.innerText = jogador.defesa;
	}
}

function atualizarAtaqueMagico(){
	if(itemAtivo[4]){
		bonusAtaqueMagico.innerText =  Math.floor(jogador.ataqueMagico / 2);
		totalAtaqueMagico.innerText = jogador.ataqueMagico + parseInt(bonusAtaqueMagico.innerText);
	} else {
		bonusAtaqueMagico.innerText = "";
		totalAtaqueMagico.innerText = jogador.ataqueMagico;
	}
}

function atualizarDefesaMagica(){
	if(itemAtivo[5]){
		bonusDefesaMagica.innerText =  Math.floor(jogador.defesaMagica / 2);
		totalDefesaMagica.innerText = jogador.defesaMagica + parseInt(bonusDefesaMagica.innerText);
	} else {
		bonusDefesaMagica.innerText = "";
		totalDefesaMagica.innerText = jogador.defesaMagica;
	}
}

function apagarStatusPersonagem(){
	txtNome.innerText = "Walking Hero";
	atualVida.innerText = "";
	totalVida.innerText = "";
	totalAtaque.innerText = "";
	totalDefesa.innerText = "";
	totalAtaqueMagico.innerText = "";
	totalDefesaMagica.innerText = "";
}

function andando(){
	if(!batalhando){
		if(imagem === jogador.imagemParado){
			imagem = jogador.imagemAndando;
			jogadorImagem.src = imagem;
		} else {
			imagem = jogador.imagemParado;
			jogadorImagem.src = imagem;
		}
	} else {
		imagem = jogador.imagemParado;
		jogadorImagem.src = imagem;
	}
	if(!animacao){
		animacao = setInterval(andando, 500);
	}
}

function pararAnimacao(){
	animacao = clearInterval(animacao);
	jogadorImagem.src = "";
}

function mostrarPersonagens(){
	personagemJogador.setAttribute("onclick",  "comecarJogo('Guerreiro')");
	personagemInimigo.setAttribute("onclick",  "comecarJogo('Mago')");
	jogadorImagem.src = "imagens/guerreiro/1.png";
	inimigoImagem.src = "imagens/guerreiro/2.png";
	txtStatus.innerText = "Escolha o personagem";
}

function personagemEscolhido(){
	personagemJogador.removeAttribute("onclick");
	personagemInimigo.removeAttribute("onclick");
	inimigoImagem.src = "";
	txtStatus.innerText = "";
}