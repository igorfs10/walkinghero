class Inimigo{
  final int id;
  final String nome;
  final int vida;
  final int ataque;
  final int defesa;
  final int ataqueMagico;
  final int defesaMagica;
  final String imagemParado;
  final String imagemAtacando;
  final int experiencia;
  final int item;

  const Inimigo({
    this.id,
    this.nome,
    this.vida,
    this.ataque,
    this.defesa,
    this.ataqueMagico,
    this.defesaMagica,
    this.imagemParado,
    this.imagemAtacando,
    this.experiencia,
    this.item
  });
}