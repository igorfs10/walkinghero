var itens = [],
	quantidadeItem1 = document.getElementById("quantidadeItem1"),
	quantidadeItem2 = document.getElementById("quantidadeItem2"),
	quantidadeItem3 = document.getElementById("quantidadeItem3"),
	quantidadeItem4 = document.getElementById("quantidadeItem4"),
	quantidadeItem5 = document.getElementById("quantidadeItem5"),
	quantidadeItem6 = document.getElementById("quantidadeItem6"),
	item1 = document.getElementById("item1"),
	item2 = document.getElementById("item2"),
	item3 = document.getElementById("item3"),
	item4 = document.getElementById("item4"),
	item5 = document.getElementById("item5"),
	item6 = document.getElementById("item6"),
	nomeItem = document.getElementById("nomeItem"),
	descricaoItem = document.getElementById("descricaoItem"),
	item1Ativo = false,
	item2Ativo = false,
	item3Ativo = false,
	item4Ativo = false,
	item5Ativo = false,
	item6Ativo = false;
	
var	dadosItem = {
		numero : 0,
		nome : "?????",
		descricao : "?????????"
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 1,
		nome : "Poção",
		descricao : "Recupera 30% da vida."
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 2,
		nome : "Ataque",
		descricao : "Aumenta o ataque por 1 minuto."
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 3,
		nome : "Defesa",
		descricao : "Aumenta a defesa por 1 minuto."
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 4,
		nome : "Experiência",
		descricao : "Dobra a experiência ganha por 1 minuto."
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 5,
		nome : "Ataque Mágico",
		descricao : "Aumenta o ataque mágico por 1 minuto."
	};
itens.push(dadosItem);

var	dadosItem = {
		numero : 6,
		nome : "Defesa Mágica",
		descricao : "Aumenta a defesa mágica por 1 minuto."
	};
itens.push(dadosItem);

function desativarItem1(){
	item1Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function desativarItem2(){
	item2Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function desativarItem3(){
	item3Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function desativarItem4(){
	item4Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function desativarItem5(){
	item5Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function desativarItem6(){
	item6Ativo = false;
	if(jogando){
		atualizarJogo();
	}
}

function itensAtivados(){
	if(item1Ativo){
		item1.dataset.selecionado = "ativado";
	} else {
		item1.dataset.selecionado = "desativado";
	}
	if(item2Ativo){
		item2.dataset.selecionado = "ativado";
	} else {
		item2.dataset.selecionado = "desativado";
	}
	if(item3Ativo){
		item3.dataset.selecionado = "ativado";
	} else {
		item3.dataset.selecionado = "desativado";
	}
	if(item4Ativo){
		item4.dataset.selecionado = "ativado";
	} else {
		item4.dataset.selecionado = "desativado";
	}
	if(item5Ativo){
		item5.dataset.selecionado = "ativado";
	} else {
		item5.dataset.selecionado = "desativado";
	}
	if(item6Ativo){
		item6.dataset.selecionado = "ativado";
	} else {
		item6.dataset.selecionado = "desativado";
	}
}

function usarItem1(){
	if(jogando){
		if(!item1Ativo){
			if (jogador.item1){
				if(atualVida.innerHTML < jogador.vida){
					recuperarVida = Math.floor(jogador.vida / 100 * 30);
					if(parseInt(atualVida.innerHTML) + recuperarVida > jogador.vida){
						atualVida.innerHTML = jogador.vida;
					} else {
						atualVida.innerHTML = parseInt(atualVida.innerHTML) + recuperarVida;
					}
					jogador.item1 = jogador.item1 - 1;
					item1Ativo = true;
					atualizarJogo();
					setTimeout(desativarItem1, 5000);
				} else {
					txtStatus.innerHTML = "A vida ja está no máximo.";
				}
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "Não pode usar o item várias vezes seguidas.";
		}
	}
}

function usarItem2(){
	if(jogando){
		if(!item2Ativo){
			if (jogador.item2){
				jogador.item2 = jogador.item2 - 1;
				item2Ativo = true;
				atualizarJogo();
				setTimeout(desativarItem2, 60000);
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "O item ja está em uso.";
		}
	}
}

function usarItem3(){
	if(jogando){
		if(!item3Ativo){
			if (jogador.item3){
				jogador.item3 = jogador.item3 - 1;
				item3Ativo = true;
				atualizarJogo();
				setTimeout(desativarItem3, 60000);
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "O item ja está em uso.";
		}
	}
}

function usarItem4(){
	if(jogando){
		if(!item4Ativo){
			if (jogador.item4){
				jogador.item4 = jogador.item4 - 1;
				item4Ativo = true;
				atualizarJogo();
				setTimeout(desativarItem4, 60000);
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "O item ja está em uso.";
		}
	}
}

function usarItem5(){
	if(jogando){
		if(!item5Ativo){
			if (jogador.item5){
				jogador.item5 = jogador.item5 - 1;
				item5Ativo = true;
				atualizarJogo();
				setTimeout(desativarItem5, 60000);
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "O item ja está em uso.";
		}
	}
}

function usarItem6(){
	if(jogando){
		if(!item6Ativo){
			if (jogador.item6){
				jogador.item6 = jogador.item6 - 1;
				item6Ativo = true;
				atualizarJogo();
				setTimeout(desativarItem6, 60000);
			} else {
				txtStatus.innerHTML = "Não tem esse item.";
			}
		} else {
			txtStatus.innerHTML = "O item ja está em uso.";
		}
	}
}

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