import '../constantes/itens.dart';
import '../models/Item.dart';

const List<Item> ITENS = [
  const Item(
    id: ID_ITEM_POCAO,
    nome: NOME_ITEM_POCAO,
    descricao: DESCRICAO_ITEM_POCAO,
    efeito: FUNCAO_ITEM_POCAO
  ),
  const Item(
    id: ID_ITEM_ATAQUE,
    nome: NOME_ITEM_ATAQUE,
    descricao: DESCRICAO_ITEM_ATAQUE,
    efeito: null
  ),
  const Item(
    id: ID_ITEM_DEFESA,
    nome: NOME_ITEM_DEFESA,
    descricao: DESCRICAO_ITEM_DEFESA,
    efeito: null
  ),
  const Item(
    id: ID_ITEM_EXPERIENCIA,
    nome: NOME_ITEM_EXPERIENCIA,
    descricao: DESCRICAO_ITEM_EXPERIENCIA,
    efeito: null
  ),
  const Item(
    id: ID_ITEM_ATAQUE_MAGICO,
    nome: NOME_ITEM_ATAQUE_MAGICO,
    descricao: DESCRICAO_ITEM_ATAQUE_MAGICO,
    efeito: null
  ),
  const Item(
    id: ID_ITEM_DEFESA_MAGICA,
    nome: NOME_ITEM_DEFESA_MAGICA,
    descricao: DESCRICAO_ITEM_DEFESA_MAGICA,
    efeito: null
  )
];