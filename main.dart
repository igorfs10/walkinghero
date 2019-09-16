import 'dados/inimigos.dart';
import 'dados/itens.dart';
import 'models/InimigoBatalha.dart';

const String VIDA = "1",
  ATAQUE = "10";

int convertBinToInt(String binaryNumber) => int.parse(binaryNumber, radix: 2);

main(){
  print("Teste.");
  print(ITENS[0].nome);

  print(INIMIGOS[1].nome);

  InimigoBatalha inimigo2 = new InimigoBatalha();
  inimigo2.nome = "TESTE BATALHA";
  print(inimigo2.nome);

  print(ITENS[0].efeito(7, 20));

  print(INIMIGOS.toString());

  int ataqueMaisVida = convertBinToInt(VIDA) + convertBinToInt(ATAQUE);

  print(ataqueMaisVida);
}