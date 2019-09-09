import '../constantes/inimigos.dart';
import '../constantes/itens.dart';
import '../models/Inimigo.dart';

const List<Inimigo> INIMIGOS= [
  const Inimigo(
    id: ID_INIMIGO_RATO,
    nome: NOME_INIMIGO_RATO,
    vida: 5,
    ataque: 1,
    defesa: 1,
    ataqueMagico: 1,
    defesaMagica: 1,
    imagemParado: "",
    imagemAtacando: "",
    experiencia: 2,
    item: ID_ITEM_POCAO
  ),
  const Inimigo(
    id: ID_INIMIGO_COELHO,
    nome: NOME_INIMIGO_COELHO,
    vida: 9,
    ataque: 2,
    defesa: 1,
    ataqueMagico: 1,
    defesaMagica: 1,
    imagemParado: "",
    imagemAtacando: "",
    experiencia: 4,
    item: ID_ITEM_EXPERIENCIA
  ),
  const Inimigo(
    id: ID_INIMIGO_LOBO,
    nome: NOME_INIMIGO_LOBO,
    vida: 12,
    ataque: 3,
    defesa: 2,
    ataqueMagico: 2,
    defesaMagica: 2,
    imagemParado: "",
    imagemAtacando: "",
    experiencia: 8,
    item: ID_ITEM_ATAQUE
  )
];