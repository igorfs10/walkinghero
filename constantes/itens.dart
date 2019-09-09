const int ID_ITEM_POCAO = 0,
	ID_ITEM_ATAQUE = 1,
	ID_ITEM_DEFESA = 2,
	ID_ITEM_EXPERIENCIA = 3,
	ID_ITEM_ATAQUE_MAGICO = 4,
	ID_ITEM_DEFESA_MAGICA = 5;

const String NOME_ITEM_POCAO = "Poção",
  NOME_ITEM_ATAQUE = "Ataque",
  NOME_ITEM_DEFESA = "Defesa",
  NOME_ITEM_EXPERIENCIA = "Experiência",
  NOME_ITEM_ATAQUE_MAGICO = "Ataque mágico",
  NOME_ITEM_DEFESA_MAGICA = "Defesa mágica";

const String DESCRICAO_ITEM_POCAO = "Recupera 5 da vida.",
  DESCRICAO_ITEM_ATAQUE = "Aumenta o ataque por 1 minuto.",
  DESCRICAO_ITEM_DEFESA = "Aumenta a defesa por 1 minuto.",
  DESCRICAO_ITEM_EXPERIENCIA = "Dobra a experiência ganha por 1 minuto.",
  DESCRICAO_ITEM_ATAQUE_MAGICO = "Aumenta o ataque mágico por 1 minuto.",
  DESCRICAO_ITEM_DEFESA_MAGICA = "Aumenta a defesa mágica por 1 minuto.";

int FUNCAO_ITEM_POCAO(int vidaAtual, int vidaTotal){
  vidaAtual = vidaAtual + 5 > vidaTotal ? vidaTotal : vidaAtual + 5;
  return vidaAtual;
}