"use strict";
const MAPA_CIDADE = 0,
	MAPA_FLORESTA = 1;

const MAPAS = [{
		numero : 0,
		nome : "Cidade",
		imagem: "url(imagens/mapas/cidade.jpg)"
	},{
		numero : 1,
		nome : "Floresta",
		imagem: "url(imagens/mapas/floresta.jpg)"
	}
];

const PRIMEIROMAPA = 0,
	ULTIMOMAPA = MAPAS.length - 1;