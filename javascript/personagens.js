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
	
function escolherPersonagem(numeroPersonagem){
	jogador = PERSONAGENS[numeroPersonagem];
}
	
function colocarStatusPersonagem(){
	totalVida.innerText = jogador.vida;
	totalAtaque.innerText = jogador.ataque;
	totalDefesa.innerText = jogador.defesa;
	totalAtaqueMagico.innerText = jogador.ataqueMagico;
	totalDefesaMagica.innerText = jogador.defesaMagica;
}

function atualizarAtaque(){
	if(itemAtivo[ITEM_ATAQUE]){
		bonusAtaque.innerText =  Math.floor(jogador.ataque / 2);
		totalAtaque.innerText = jogador.ataque + parseInt(bonusAtaque.innerText);
	} else {
		bonusAtaque.innerText = "";
		totalAtaque.innerText = jogador.ataque;
	}
}

function atualizarDefesa(){
	if(itemAtivo[ITEM_DEFESA]){
		bonusDefesa.innerText =  Math.floor(jogador.defesa / 2);
		totalDefesa.innerText = jogador.defesa + parseInt(bonusDefesa.innerText);
	} else {
		bonusDefesa.innerText = "";
		totalDefesa.innerText = jogador.defesa;
	}
}

function atualizarAtaqueMagico(){
	if(itemAtivo[ITEM_ATAQUEMAGICO]){
		bonusAtaqueMagico.innerText =  Math.floor(jogador.ataqueMagico / 2);
		totalAtaqueMagico.innerText = jogador.ataqueMagico + parseInt(bonusAtaqueMagico.innerText);
	} else {
		bonusAtaqueMagico.innerText = "";
		totalAtaqueMagico.innerText = jogador.ataqueMagico;
	}
}

function atualizarDefesaMagica(){
	if(itemAtivo[ITEM_DEFESAMAGICA]){
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
	personagemJogador.setAttribute("onclick",  "comecarJogo(PERSONAGEM_GUERREIRO)");
	personagemInimigo.setAttribute("onclick",  "comecarJogo(PERSONAGEM_MAGO)");
	jogadorImagem.src = "imagens/guerreiro/1.png";
	inimigoImagem.src = "imagens/guerreiro/2.png";
	txtStatus.innerText = TEXTO_ESCOLHAPERSONAGEM;
}

function personagemEscolhido(){
	personagemJogador.removeAttribute("onclick");
	personagemInimigo.removeAttribute("onclick");
	inimigoImagem.src = "";
	txtStatus.innerText = TEXTO_VAZIO;
}