"use strict";
//Sorteia com qual inimigo irá batalhar
function escolherInimigo(local){
	if(local !== 0){
		sorteio = sortearNumero(1, 100);
		if (sorteio <= 60){
			inimigo = INIMIGOS[local][0];
		}else if (sorteio <= 90){
			inimigo = INIMIGOS[local][1];
		}else{
			inimigo = INIMIGOS[local][2];
		}
	}
}