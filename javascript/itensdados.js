"use strict";
const ITEM_POCAO = 0,
	ITEM_ATAQUE = 1,
	ITEM_DEFESA = 2,
	ITEM_EXPERIENCIA = 3,
	ITEM_ATAQUEMAGICO = 4,
	ITEM_DEFESAMAGICA = 5;
	
	
const ITENS = [{
		numero : ITEM_POCAO,
		nome : "Poção",
		descricao : "Recupera 30% da vida.",
		efeito: usarItem0
	},{
		numero : ITEM_ATAQUE,
		nome : "Ataque",
		descricao : "Aumenta o ataque por 1 minuto.",
		efeito: usarItem1
	},{
		numero : ITEM_DEFESA,
		nome : "Defesa",
		descricao : "Aumenta a defesa por 1 minuto.",
		efeito: usarItem2
	},{
		numero : ITEM_EXPERIENCIA,
		nome : "Experiência",
		descricao : "Dobra a experiência ganha por 1 minuto.",
		efeito: usarItem3
	},{
		numero : ITEM_ATAQUEMAGICO,
		nome : "Ataque Mágico",
		descricao : "Aumenta o ataque mágico por 1 minuto.",
		efeito: usarItem4
	},{
		numero : ITEM_DEFESAMAGICA,
		nome : "Defesa Mágica",
		descricao : "Aumenta a defesa mágica por 1 minuto.",
		efeito: usarItem5
	}
];