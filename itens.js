var itens = [],
	nomeItem = document.getElementById("nomeItem"),
	descricaoItem = document.getElementById("descricaoItem");

function mostrarInfoItem(id){
	nomeItem.innerHTML = itens[id].nome;
	descricaoItem.innerHTML = itens[id].descricao;
}

var	dadosItem = {
		numero : 0,
		nome : "?????",
		descricao : "?????????",
		efeito : function(nome){
			alert(nome);
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 1,
		nome : "Poção",
		descricao : "Recupera 10% da vida.",
		efeito : function(){
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 2,
		nome : "Ataque",
		descricao : "Aumenta o ataque por 1 minuto.",
		efeito : function(){
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 3,
		nome : "Defesa",
		descricao : "Aumenta a defesa por 1 minuto.",
		efeito : function(){
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 4,
		nome : "Experiência",
		descricao : "Dobra a experiência ganha por 1 minuto.",
		efeito : function(){
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 5,
		nome : "Ataque Mágico",
		descricao : "Aumenta o ataque mágico por 1 minuto.",
		efeito : function(){
		}
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 6,
		nome : "Defesa Mágica",
		descricao : "Aumenta a defesa mágica por 1 minuto.",
		efeito : function(){
		}
	};
itens.push(dadosItem);