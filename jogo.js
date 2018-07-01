var document = document,
	tempo = 0,
	jogando = false,
	batalhando = false,
	segundos = document.getElementById("txtSegundos"),
	minutos = document.getElementById("txtMinutos"),
	horas = document.getElementById("txtHoras"),
	dias = document.getElementById("txtDias"),
	txtStatus = document.getElementById("txtStatus"),
	personagemJogador = document.getElementById("personagemJogador"),
	personagemInimigo = document.getElementById("personagemInimigo"),
	jogador,
	inimigo,
	jogo;
	
function converterTempo(){
	var dia = Math.floor(tempo / (60 * 60 * 24)),
		hora = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)),
		minuto = Math.floor((tempo % (60 * 60)) / 60),
		segundo  = Math.floor((tempo % 60));
	
	if(segundo < 10){
		segundos.innerHTML = "0" + segundo;
	} else {
		segundos.innerHTML = segundo;
	}
	if(minuto < 10){
		minutos.innerHTML = "0" + minuto;
	} else {
		minutos.innerHTML = minuto;
	}
	if(hora < 10){
		horas.innerHTML = "0" + hora;
	} else {
		horas.innerHTML = hora;
	}
	dias.innerHTML = dia;
}
	
function execucaoJogo(){
	tempo = tempo + 1;
	converterTempo();
	jogo = setTimeout(execucaoJogo,1000);
}

function novoJogo(){
	if(jogando){
		pararAnimacao();
	}
	tempo = 0;
	converterTempo();
	clearTimeout(jogo);
	apagarStatusPersonagem();
	apagarQuantidadeItens();
	apagarNivel();
	personagemJogador.setAttribute("onclick",  "comecarJogo('Guerreiro');");
	personagemInimigo.setAttribute("onclick",  "comecarJogo('Mago');");
	txtStatus.innerHTML = "Escolha o personagem";
}

function comecarJogo(nomePersonagem){
	jogador = escolherPersonagem(nomePersonagem);
	colocarStatusPersonagem();
	colocarQuantidadeItens();
	pegarNivel();
	jogo = setTimeout(execucaoJogo,1000);
	jogando = true;
	personagemJogador.removeAttribute("onclick");
	personagemInimigo.removeAttribute("onclick");
	txtStatus.innerHTML = "";
	andando();
}

function salvarJogo(){
	if(jogando === true){
		localStorage.setItem("nomeSalvo", txtNome.innerHTML);
		localStorage.setItem("tempoSalvo", tempo);
		localStorage.setItem("jogador", JSON.stringify(jogador));
	} else {
		txtStatus.innerHTML = "Precisa estar jogando para salvar o jogo.";
	}
}

function carregarJogo(){
	if (isNaN(parseInt(localStorage.getItem("tempoSalvo")))){
		txtStatus.innerHTML = "Não existe jogo salvo";
	} else {
		if(jogando){
			pararAnimacao();
		}
		clearTimeout(jogo);
		tempo = parseInt(localStorage.getItem("tempoSalvo"));
		jogador = JSON.parse(localStorage.getItem("jogador"));
		converterTempo();
		colocarStatusPersonagem();
		colocarQuantidadeItens();
		pegarNivel();
		jogo = setTimeout(execucaoJogo, 1000);
		personagemJogador.removeAttribute("onclick");
		personagemInimigo.removeAttribute("onclick");
		txtStatus.innerHTML = "";
		jogando = true;
		andando();
	}
}