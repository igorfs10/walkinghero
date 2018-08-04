"use strict";
//Inimigos do jogo
const INIMIGO_RATO = 0,
	INIMIGO_COELHO = 1,
	INIMIGO_LOBO = 2;

const INIMIGOS = [{
				numero : INIMIGO_RATO,
				nome : "Rato",
				vida : 5,
				ataque : 1,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 2,
				item: ITEM_POCAO
			},{
				numero : INIMIGO_COELHO,
				nome : "Coelho",
				vida : 9,
				ataque : 2,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 4,
				item: ITEM_EXPERIENCIA
			},{
				numero : INIMIGO_LOBO,
				nome : "Lobo",
				vida : 12,
				ataque : 3,
				defesa : 2,
				ataqueMagico: 2,
				defesaMagica: 2,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 8,
				item: ITEM_ATAQUE
			}];