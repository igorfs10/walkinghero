var txtNivel = document.getElementById("txtNivel"),
	txtExperiencia = document.getElementById("txtExperiencia"),
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
		experienciaProximo,
		i = 0;
	for (i = 0; experiencia >= nivel[i]; i++){
	}
	nivelJogador = i;
	experienciaProximo = nivel[i];
	txtNivel.innerHTML = "Nivel: " + nivelJogador;
	txtExperiencia.innerHTML = experiencia + "/" + experienciaProximo;
}

function apagarNivel(){
	txtNivel.innerHTML = "Nivel: ";
	txtExperiencia.innerHTML = "/";
}