"use strict";

const PERSONAGEM_GUERREIRO = 0,
	PERSONAGEM_MAGO = 1;

//Personagens do jogo
const PERSONAGENS = [{
		numero : PERSONAGEM_GUERREIRO,
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
		},{
		numero : PERSONAGEM_MAGO,
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
		}
];