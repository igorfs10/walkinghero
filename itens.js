var itens = [],
	quantidadeItem1 = document.getElementById("quantidadeItem1"),
	quantidadeItem2 = document.getElementById("quantidadeItem2"),
	quantidadeItem3 = document.getElementById("quantidadeItem3"),
	quantidadeItem4 = document.getElementById("quantidadeItem4"),
	quantidadeItem5 = document.getElementById("quantidadeItem5"),
	quantidadeItem6 = document.getElementById("quantidadeItem6"),
	nomeItem = document.getElementById("nomeItem"),
	descricaoItem = document.getElementById("descricaoItem");

function mostrarInfoItem(id){
	nomeItem.innerHTML = itens[id].nome;
	descricaoItem.innerHTML = itens[id].descricao;
}

function colocarQuantidadeItens(){
	quantidadeItem1.innerHTML = jogador.item1;
	quantidadeItem2.innerHTML = jogador.item2;
	quantidadeItem3.innerHTML = jogador.item3;
	quantidadeItem4.innerHTML = jogador.item4;
	quantidadeItem5.innerHTML = jogador.item5;
	quantidadeItem6.innerHTML = jogador.item6;
}

function apagarQuantidadeItens(){
	quantidadeItem1.innerHTML = "";
	quantidadeItem2.innerHTML = "";
	quantidadeItem3.innerHTML = "";
	quantidadeItem4.innerHTML = "";
	quantidadeItem5.innerHTML = "";
	quantidadeItem6.innerHTML = "";
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