var txtNivel = document.getElementById("txtNivel"),
	txtExperiencia = document.getElementById("txtExperiencia"),
	txtExperienciaProximo = document.getElementById("txtExperienciaProximo"),
	nivel = [
		-1,
		10,
		100,
		1000,
		10000,
		100000
	];

function pegarNivel(){
	var nivelJogador,
		experiencia = jogador.experiencia,
		experienciaProximo;
	for (i = 0; experiencia >= nivel[i]; i++){
	}
	nivelJogador = i;
	experienciaProximo = nivel[i];
	txtNivel.innerHTML = nivelJogador;
	txtExperiencia.innerHTML = experiencia;
	txtExperienciaProximo.innerHTML = experienciaProximo;
}

function apagarNivel(){
	txtNivel.innerHTML = "";
	txtExperiencia.innerHTML = "";
	txtExperienciaProximo.innerHTML = "";
}