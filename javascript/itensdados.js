"use strict";
const ITEM_POCAO = 0,
	ITEM_ATAQUE = 1,
	ITEM_DEFESA = 2,
	ITEM_EXPERIENCIA = 3,
	ITEM_ATAQUEMAGICO = 4,
	ITEM_DEFESAMAGICA = 5;
	
	
const ITENS = [{
		numero : 0,
		nome : "Poção",
		descricao : "Recupera 30% da vida.",
		efeito: usarItem0
	},{
		numero : 1,
		nome : "Ataque",
		descricao : "Aumenta o ataque por 1 minuto.",
		efeito: usarItem1
	},{
		numero : 2,
		nome : "Defesa",
		descricao : "Aumenta a defesa por 1 minuto.",
		efeito: usarItem2
	},{
		numero : 3,
		nome : "Experiência",
		descricao : "Dobra a experiência ganha por 1 minuto.",
		efeito: usarItem3
	},{
		numero : 4,
		nome : "Ataque Mágico",
		descricao : "Aumenta o ataque mágico por 1 minuto.",
		efeito: usarItem4
	},{
		numero : 5,
		nome : "Defesa Mágica",
		descricao : "Aumenta a defesa mágica por 1 minuto.",
		efeito: usarItem5
	}
];