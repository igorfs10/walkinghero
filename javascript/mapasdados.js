"use strict";
const MAPA_CIDADE = 0,
	MAPA_FLORESTA = 1;

const MAPAS = [{
		numero : MAPA_CIDADE,
		nome : "Cidade",
		imagem: "url(imagens/mapas/cidade.jpg)"
	},{
		numero : MAPA_FLORESTA,
		nome : "Floresta",
		imagem: "url(imagens/mapas/floresta.jpg)"
	}
];

const PRIMEIROMAPA = MAPA_CIDADE,
	ULTIMOMAPA = MAPA_FLORESTA;