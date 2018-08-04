"use strict";

const INIMIGO1 = 0,
	INIMIGO2 = 1,
	INIMIGO3 = 2;

//Sorteia com qual inimigo irá batalhar
function escolherInimigo(local){
	if(local !== MAPA_CIDADE){
		sorteio = sortearNumero(1, 100);
		if (sorteio <= 60){
			inimigo = MAPAINIMIGOS[local][INIMIGO1];
		}else if (sorteio <= 90){
			inimigo = MAPAINIMIGOS[local][INIMIGO2];
		}else{
			inimigo = MAPAINIMIGOS[local][INIMIGO3];
		}
	}
}