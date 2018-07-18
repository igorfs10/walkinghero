"use strict";
function escolherInimigo(local){
	if(local === "Floresta"){
		var sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
		if(sorteio < 60){
			inimigo = {
				numero : 1,
				nome : "Rato",
				vida : 5,
				ataque : 1,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 2,
				item: 1
			};
		} else if(sorteio < 90){
			inimigo = {
				numero : 2,
				nome : "Lobo",
				vida : 9,
				ataque : 2,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 4,
				item: 2
			};
		} else {
			inimigo = {
				numero : 3,
				nome : "Leão",
				vida : 12,
				ataque : 3,
				defesa : 2,
				ataqueMagico: 2,
				defesaMagica: 2,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 8,
				item: 3
			};
		}
	}
}