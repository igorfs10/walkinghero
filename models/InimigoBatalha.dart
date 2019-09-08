class Inimigo{
  int _id;
  String _nome;
  int _vida;
  int _ataque;
  int _defesa;
  int _ataqueMagico;
  int _defesaMagica;
  String _imagemParado;
  String _imagemAtacando;
  int _experiencia;
  int _item;

  int get id => _id;
  set id(int id) => _id = id;

  String get nome => _nome;
  set nome(String nome) => _nome = nome;

  int get vida => _vida;
  set vida(int vida) => _vida = vida;

  int get ataque => _ataque;
  set ataque(int ataque) => _ataque = ataque;

  int get defesa => _defesa;
  set defesa(int defesa) => _defesa = defesa;

  int get ataqueMagico => _ataqueMagico;
  set ataqueMagico(int ataqueMagico) => _ataqueMagico = ataqueMagico;

  int get defesaMagica => _defesaMagica;
  set defesaMagica(int defesaMagica) => _defesaMagica = defesaMagica;

  String get imagemParado => _imagemParado;
  set imagemParado(String imagemParado) => _imagemParado = imagemParado;

  String get imagemAtacando => _imagemAtacando;
  set imagemAtacando(String imagemAtacando) => _imagemAtacando = imagemAtacando;

  int get experiencia => _experiencia;
  set experiencia(int experiencia) => _experiencia = experiencia;

  int get item => _item;
  set item(int item) => _item = item;
}