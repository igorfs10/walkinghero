import "constantes/inimigos.dart";
import "dados/itens.dart";
import "models/Inimigo.dart";
import "models/InimigoBatalha.dart";

main(){
  print("Teste.");
  print(ITENS[0].nome);
  print(INIMIGO_COELHO);

  Inimigo inimigo1 = new Inimigo(nome: "Teste inimigo");
  print(inimigo1.nome);

  InimigoBatalha inimigo2 = new InimigoBatalha();
  inimigo2.nome = "TESTE BATALHA";
  print(inimigo2.nome);
}