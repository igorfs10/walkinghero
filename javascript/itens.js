"use strict";
let quantidadeItem = [
	document.getElementById("quantidadeItem0"),
	document.getElementById("quantidadeItem1"),
	document.getElementById("quantidadeItem2"),
	document.getElementById("quantidadeItem3"),
	document.getElementById("quantidadeItem4"),
	document.getElementById("quantidadeItem5")
	],
	itemFundo = [
		document.getElementById("item0"),
		document.getElementById("item1"),
		document.getElementById("item2"),
		document.getElementById("item3"),
		document.getElementById("item4"),
		document.getElementById("item5"),
	],
	desativarItem = [
		desativarItem0,
		desativarItem1,
		desativarItem2,
		desativarItem3,
		desativarItem4,
		desativarItem5],
	itemAtivo = [false, false, false, false, false, false],
	timerItem = [0,0,0,0,0,0],
	nomeItem = document.getElementById("nomeItem"),
	descricaoItem = document.getElementById("descricaoItem"),
	pExperiencia = document.getElementById("pExperiencia"),
	sorteioItem,
	recuperarVida;

//Desativa os efeitos e atualiza os status
function desativarItem0(){
	desativacaodoItem(ITEM_POCAO);
}

function desativarItem1(){
	desativacaodoItem(ITEM_ATAQUE);
	if(jogando){
		atualizarAtaque();
	}
}

function desativarItem2(){
	desativacaodoItem(ITEM_DEFESA);
	if(jogando){
		atualizarDefesa();
	}
}

function desativarItem3(){
	desativacaodoItem(ITEM_EXPERIENCIA);
	pExperiencia.style.color = "#aaaaaa";
}

function desativarItem4(){
	desativacaodoItem(ITEM_ATAQUEMAGICO);
	if(jogando){
		atualizarAtaqueMagico();
	}
}

function desativarItem5(){
	desativacaodoItem(ITEM_DEFESAMAGICA);
	if(jogando){
		atualizarDefesaMagica();
	}
}

//Ativa os itens e atualiza os status
function usarItem0(){
	if(jogando){
		//Verifica se não estava ativo
		if(!itemAtivo[ITEM_POCAO]){
			//Verifica se o Jogador possui o item
			if (jogador.item[ITEM_POCAO]){
				//Só cura se a vida atual for menor que o total
				if(atualVida.innerText < jogador.vida){
					recuperarVida = Math.floor(jogador.vida / 100 * 30);
					//Cura para o total se a quantidade da cura deixar maior que o total
					if(parseInt(atualVida.innerText) + recuperarVida > jogador.vida){
						atualVida.innerText = jogador.vida;
					} else {
						atualVida.innerText = parseInt(atualVida.innerText) + recuperarVida;
					}
					usarAtivarItem(ITEM_POCAO, 10000);
				} else {
					txtStatus.innerText = "A vida ja está no máximo.";
				}
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "Não pode usar o item várias vezes seguidas.";
		}
	}
}

function usarItem1(){
	if(jogando){
		if(!itemAtivo[ITEM_ATAQUE]){
			if (jogador.item[ITEM_ATAQUE]){
				usarAtivarItem(ITEM_ATAQUE, 60000);
				atualizarAtaque();
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "O item ja está em uso.";
		}
	}
}

function usarItem2(){
	if(jogando){
		if(!itemAtivo[ITEM_DEFESA]){
			if (jogador.item[ITEM_DEFESA]){
				usarAtivarItem(2, 60000);
				atualizarDefesa();
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "O item ja está em uso.";
		}
	}
}

function usarItem3(){
	if(jogando){
		if(!itemAtivo[ITEM_EXPERIENCIA]){
			if (jogador.item[ITEM_EXPERIENCIA]){
				usarAtivarItem(3, 60000);
				pExperiencia.style.color = "#ef5350";
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "O item ja está em uso.";
		}
	}
}

function usarItem4(){
	if(jogando){
		if(!itemAtivo[ITEM_ATAQUEMAGICO]){
			if (jogador.item[ITEM_ATAQUEMAGICO]){
				usarAtivarItem(4, 60000);
				atualizarAtaqueMagico();
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "O item ja está em uso.";
		}
	}
}

function usarItem5(){
	if(jogando){
		if(!itemAtivo[ITEM_DEFESAMAGICA]){
			if (jogador.item[ITEM_DEFESAMAGICA]){
				usarAtivarItem(5, 60000);
				atualizarDefesaMagica();
			} else {
				txtStatus.innerText = "Não tem esse item.";
			}
		} else {
			txtStatus.innerText = "O item ja está em uso.";
		}
	}
}

//Mostra a informação do item na caixa de texto ao lado
function mostrarInfoItem(numeroItem){
	nomeItem.innerText = ITENS[numeroItem].nome;
	descricaoItem.innerText = ITENS[numeroItem].descricao;
}

//Coloca a quantidade de todos os itens na interface do jogo
function colocarQuantidadeItens(){
	quantidadeItem[ITEM_POCAO].innerText = jogador.item[ITEM_POCAO];
	quantidadeItem[ITEM_ATAQUE].innerText = jogador.item[ITEM_ATAQUE];
	quantidadeItem[ITEM_DEFESA].innerText = jogador.item[ITEM_DEFESA];
	quantidadeItem[ITEM_EXPERIENCIA].innerText = jogador.item[ITEM_EXPERIENCIA];
	quantidadeItem[ITEM_ATAQUEMAGICO].innerText = jogador.item[ITEM_ATAQUEMAGICO];
	quantidadeItem[ITEM_DEFESAMAGICA].innerText = jogador.item[ITEM_DEFESAMAGICA];
}

//Apaga a quantidade de todos os itens na interface do jogo
function apagarQuantidadeItens(){
	quantidadeItem[ITEM_POCAO].innerText = "";
	quantidadeItem[ITEM_ATAQUE].innerText = "";
	quantidadeItem[ITEM_DEFESA].innerText = "";
	quantidadeItem[ITEM_EXPERIENCIA].innerText = "";
	quantidadeItem[ITEM_ATAQUEMAGICO].innerText = "";
	quantidadeItem[ITEM_DEFESAMAGICA].innerText = "";
}

//Funcao que faz o jogador encontrar um item aleatório
function acharItem(){
	if(!batalhando && txtMapa.dataset.numero !== MAPA_CIDADE){
		if(parseInt(txtMapa.dataset.numero) === MAPA_FLORESTA){
			sorteio = sortearNumero(1, 100);
			if(sorteio <= 10){
				sorteioItem = sortearNumero(0, 5);
				ganharItem(sorteioItem);
				txtStatus.innerText = `${jogador.nome} encontrou 1 ${ITENS[sorteioItem].nome}.`;
			}
		}
	}
}

//Funcao usada para todos os itens quando ganhar um
function ganharItem(numeroItem){
	jogador.item[numeroItem] = jogador.item[numeroItem] + 1;
	quantidadeItem[numeroItem].innerText = jogador.item[numeroItem];
}

//Funcao de comandos padroes para usar itens
function usarAtivarItem(numeroItem, intervalo){
	jogador.item[numeroItem] = jogador.item[numeroItem] - 1;
	quantidadeItem[numeroItem].innerText = jogador.item[numeroItem];
	itemAtivo[numeroItem] = true;
	itemFundo[numeroItem].dataset.selecionado = "ativado";
	timerItem[numeroItem] = setInterval(desativarItem[numeroItem], intervalo);
}

//Funcao de comandos padroes para desativar itens
function desativacaodoItem(numeroItem){
	itemAtivo[numeroItem] = false;
	itemFundo[numeroItem].dataset.selecionado = "desativado";
	timerItem[numeroItem] = clearInterval(timerItem[numeroItem]);
}