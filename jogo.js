var document = document,
	tempo = 0,
	jogando = false,
	nome = document.getElementById("txtNome"),
	segundos = document.getElementById("txtSegundos"),
	minutos = document.getElementById("txtMinutos"),
	horas = document.getElementById("txtHoras"),
	dias = document.getElementById("txtDias"),
	txtStatus = document.getElementById("txtStatus"),
	nomeItem = document.getElementById("nomeItem"),
	descricaoItem = document.getElementById("descricaoItem"),
	timeout;
	
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
	
function contarTempo(){
	tempo = tempo + 1;
	converterTempo();
	timeout = setTimeout(contarTempo,1000);
}

function novoJogo(){
	clearTimeout(timeout);
	nome.innerHTML = "Guerreiro";
	tempo = 0;
	converterTempo();
	timeout = setTimeout(contarTempo,1000);
	jogando = true;
}

function salvarJogo(){
	if(jogando === true){
		localStorage.setItem("nomeSalvo", nome.innerHTML);
		localStorage.setItem("tempoSalvo", tempo);
	} else {
		txtStatus.innerHTML = "Precisa estar jogando para salvar o jogo.";
	}
}

function carregarJogo(){
	if (isNaN(parseInt(localStorage.getItem("tempoSalvo")))){
		txtStatus.innerHTML = "Não existe jogo salvo";
	} else {
		clearTimeout(timeout);
		nome.innerHTML = localStorage.getItem("nomeSalvo");
		tempo = parseInt(localStorage.getItem("tempoSalvo"));
		converterTempo();
		timeout = setTimeout(contarTempo,1000);
		if (jogando === false){
			jogando = true;
		}
	}
}

function mostrarInfoItem(id){
	nomeItem.innerHTML = itens[id].nome;
	descricaoItem.innerHTML = itens[id].descricao;
}