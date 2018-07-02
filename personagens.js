var imagem = "",
	jogadorImagem = document.getElementById("jogadorImagem"),
	inimigoImagem = document.getElementById("inimigoImagem"),
	txtNome = document.getElementById("txtNome"),
	atualVida = document.getElementById("atualVida"),
	totalVida = document.getElementById("totalVida"),
	totalAtaque = document.getElementById("totalAtaque"),
	totalDefesa = document.getElementById("totalDefesa"),
	totalAtaqueMagico = document.getElementById("totalAtaqueMagico"),
	totalDefesaMagica = document.getElementById("totalDefesaMagica");
	
function escolherPersonagem(nomePersonagem){
	if(nomePersonagem === "Guerreiro"){
		var personagem = {
		numero : 1,
		nome : "Guerreiro",
		vida : 10,
		ataque : 2,
		defesa : 2,
		ataqueMagico: 1,
		defesaMagica: 1,
		imagemParado: "imagens/guerreiro/1.png",
		imagemAndando: "imagens/guerreiro/2.png",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 1001,
		item1: 0,
		item2: 0,
		item3: 0,
		item4: 1,
		item5: 1,
		item6: 1
		};
		return personagem;
	} else if(nomePersonagem === "Mago"){
		var personagem = {
		numero : 2,
		nome : "Mago",
		vida : 10,
		ataque : 1,
		defesa : 1,
		ataqueMagico: 2,
		defesaMagica: 2,
		imagemParado: "",
		imagemAndando: "",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0,
		item1: 1,
		item2: 1,
		item3: 1,
		item4: 0,
		item5: 0,
		item6: 0
		};
		return personagem;
	}
}
	
function colocarStatusPersonagem(){
	txtNome.innerHTML = jogador.nome;
	totalVida.innerHTML = jogador.vida;
	totalAtaque.innerHTML = jogador.ataque;
	totalDefesa.innerHTML = jogador.defesa;
	totalAtaqueMagico.innerHTML = jogador.ataqueMagico;
	totalDefesaMagica.innerHTML = jogador.defesaMagica;
}

function apagarStatusPersonagem(){
	txtNome.innerHTML = "Walking Hero";
	atualVida.innerHTML = "";
	totalVida.innerHTML = "";
	totalAtaque.innerHTML = "";
	totalDefesa.innerHTML = "";
	totalAtaqueMagico.innerHTML = "";
	totalDefesaMagica.innerHTML = "";
}

function andando(){
	if(imagem === jogador.imagemParado){
		imagem = jogador.imagemAndando;
		jogadorImagem.src = imagem;
	} else {
		imagem = jogador.imagemParado;
		jogadorImagem.src = imagem;
	}
	animacao = setTimeout(andando,500);
}

function pararAnimacao(){
	clearTimeout(animacao);
	jogadorImagem.src = "";
}