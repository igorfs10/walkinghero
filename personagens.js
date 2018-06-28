var txtNome = document.getElementById("txtNome"),
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
		imagemParado: "",
		imagemAndando: "",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0
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
		experiencia: 0
		};
		return personagem;
	}
}

function colocarStatusPersonagem(){
	txtNome.innerHTML = jogador.nome;
	atualVida.innerHTML = jogador.vida;
	totalVida.innerHTML = jogador.vida;
	totalAtaque.innerHTML = jogador.ataque;
	totalDefesa.innerHTML = jogador.defesa;
	totalAtaqueMagico.innerHTML = jogador.ataqueMagico;
	totalDefesaMagica.innerHTML = jogador.defesaMagica;
}