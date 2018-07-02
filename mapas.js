var txtMapa = document.getElementById("txtMapa"),
	linhaCenario = document.getElementById("linhaCenario"),
	mapas = [];

var	mapaDados = {
		numero : 0,
		nome : "?????",
		imagem: ""
	};
mapas.push(mapaDados);

var	mapaDados = {
		numero : 1,
		nome : "Cidade",
		imagem: "url(imagens/mapas/cidade.jpg)"
	};
mapas.push(mapaDados);

var	mapaDados = {
		numero : 2,
		nome : "Floresta",
		imagem: "url(imagens/mapas/floresta.jpg)"
	};
mapas.push(mapaDados);

var primeiro = 1,
	ultimo = mapas.length - 1,
	atual = 0;

function mudarMapa(numero){
	txtMapa.innerHTML = mapas[numero].nome;
	linhaCenario.style.backgroundImage = mapas[numero].imagem;
}

function inicialMapa(){
	mudarMapa(1);
}

function proximoMapa(){
	if(jogando && batalhando == false){
		for(atual = 0; mapas[atual].nome !== txtMapa.innerHTML; atual++){}
		if(atual === ultimo){
			txtStatus.innerHTML = "Esse é o ultimo local.";
		} else {
			mudarMapa(atual + 1);
		}
	} else if(batalhando){
		txtStatus.innerHTML = "Não pode mudar o local enquanto batalha.";
	} else {
		txtStatus.innerHTML = "Precisa estar jogando para mudar o local.";
	}
}

function anteriorMapa(){
	if(jogando && batalhando == false){
		for(atual = 0; mapas[atual].nome !== txtMapa.innerHTML; atual++){}
		if(atual === primeiro){
			txtStatus.innerHTML = "Esse é o primeiro local.";
		} else {
			mudarMapa(atual - 1);
		}
	} else if(batalhando){
		txtStatus.innerHTML = "Não pode mudar o local enquanto batalha.";
	} else {
		txtStatus.innerHTML = "Precisa estar jogando para mudar o local.";
	}
}