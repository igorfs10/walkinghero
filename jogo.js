var document = document,
	time = 0,
	jogando = false,
	tempo = document.getElementById("txtTempo");
	
function contarTempo(){
	time = time + 1;
	tempo.innerHTML = "Tempo: " + time + "s";
	setTimeout(contarTempo,1000);
}

function novoJogo(){
	time = 0;
	tempo.innerHTML = "Tempo: " + time + "s";
	setTimeout(contarTempo,1000);
	jogando = true;
}

function salvar(){
	if(jogando === true){
		localStorage.setItem("tempinho", time);
	} else {
		alert("Precisa estar jogando para salvar o jogo.");
	}
}

function carregar(){
	if (isNaN(parseInt(localStorage.getItem("tempinho")))){
		alert("Não tem arquivo salvo");
	} else {
		time = parseInt(localStorage.getItem("tempinho"));
		tempo.innerHTML = "Tempo: " + time + "s";
		if (jogando === false){
			setTimeout(contarTempo,1000);
			jogando = true;
		}
	}
}