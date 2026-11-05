import { perguntas } from './questions.js';
import { calcularPontuacao, mensagemResultado } from './logic.js';

const $ = id => document.getElementById(id);
let atual = 0;
let respostas = [];

function mostrarPergunta() {
  const p = perguntas[atual];
  $('progresso').textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  $('pergunta').textContent = p.texto;
  $('opcoes').innerHTML = '';
  p.opcoes.forEach((texto, i) => {
    const b = document.createElement('button');
    b.textContent = texto;
    b.onclick = () => responder(i);
    $('opcoes').append(b);
  });
}

function responder(i) {
  respostas.push(i);
  atual++;
  if (atual < perguntas.length) mostrarPergunta();
  else mostrarResultado();
}

function mostrarResultado() {
  const pontos = calcularPontuacao(perguntas, respostas);
  $('progresso').textContent = 'Fim do quiz';
  $('pergunta').textContent = '';
  $('opcoes').innerHTML = '';
  $('pontos').textContent = `Você acertou ${pontos} de ${perguntas.length}`;
  $('mensagem').textContent = mensagemResultado(pontos, perguntas.length);
  $('resultado').hidden = false;
}

$('reiniciar').onclick = () => {
  atual = 0; respostas = [];
  $('resultado').hidden = true;
  mostrarPergunta();
};

mostrarPergunta();
