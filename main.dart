import 'dados/inimigos.dart';
import 'dados/itens.dart';
import 'models/InimigoBatalha.dart';

main(){
  print("Teste.");
  print(ITENS[0].nome);

  print(INIMIGOS[1].nome);

  InimigoBatalha inimigo2 = new InimigoBatalha();
  inimigo2.nome = "TESTE BATALHA";
  print(inimigo2.nome);

  print(ITENS[0].efeito(7, 20));
}