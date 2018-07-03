function escolherInimigo(local){
	if(local === "Floresta"){
		sorteio = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
		if(sorteio < 40){
			var inimigo = {
				numero : 1,
				nome : "Rato",
				vida : 15,
				ataque : 1,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 2,
				item: 1
			};
			return inimigo;
		} else if(sorteio < 80){
			var inimigo = {
				numero : 2,
				nome : "Lobo",
				vida : 18,
				ataque : 2,
				defesa : 1,
				ataqueMagico: 1,
				defesaMagica: 1,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 4,
				item: 2
			};
			return inimigo;
		} else {
			var inimigo = {
				numero : 3,
				nome : "Leão",
				vida : 20,
				ataque : 3,
				defesa : 2,
				ataqueMagico: 2,
				defesaMagica: 2,
				imagemParado: "",
				imagemAtacando: "",
				experiencia: 8,
				item: 3
			};
			return inimigo;
		}
	}
}