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
	item1.dataset.selecionado = "desativado";
}

function desativarItem2(){
	item2Ativo = false;
	item2.dataset.selecionado = "desativado";
	if(jogando){
		atualizarAtaque();
	}
}

function desativarItem3(){
	item3Ativo = false;
	item3.dataset.selecionado = "desativado";
	if(jogando){
		atualizarDefesa();
	}
}

function desativarItem4(){
	item4Ativo = false;
	item4.dataset.selecionado = "desativado";
	txtExperiencia.style.color = "#aaaaaa";
}

function desativarItem5(){
	item5Ativo = false;
	item5.dataset.selecionado = "desativado";
	if(jogando){
		atualizarAtaqueMagico();
	}
}

function desativarItem6(){
	item6Ativo = false;
	item6.dataset.selecionado = "desativado";
	if(jogando){
		atualizarDefesaMagica();
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
					quantidadeItem1.innerHTML = jogador.item1;
					item1.dataset.selecionado = "ativado";
					setTimeout(desativarItem1, 10000);
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
				quantidadeItem2.innerHTML = jogador.item2;
				item2.dataset.selecionado = "ativado";
				atualizarAtaque();
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
				quantidadeItem3.innerHTML = jogador.item3;
				item3.dataset.selecionado = "ativado";
				atualizarDefesa();
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
				quantidadeItem4.innerHTML = jogador.item4;
				item4.dataset.selecionado = "ativado";
				txtExperiencia.style.color = "#ef5350";
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
				quantidadeItem5.innerHTML = jogador.item5;
				item5.dataset.selecionado = "ativado";
				atualizarAtaqueMagico();
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
				quantidadeItem6.innerHTML = jogador.item6;
				item6.dataset.selecionado = "ativado";
				atualizarDefesaMagica();
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