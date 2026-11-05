// Funções puras: fáceis de testar na esteira (CI).
export function calcularPontuacao(perguntas, respostas) {
  return perguntas.filter((p, i) => respostas[i] === p.correta).length;
}

export function mensagemResultado(pontos, total) {
  if (pontos === total) return 'Perfeito!';
  if (pontos / total >= 0.6) return 'Muito bem!';
  return 'Continue estudando!';
}
