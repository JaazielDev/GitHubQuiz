import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularPontuacao, mensagemResultado } from './logic.js';

const perguntas = [{ correta: 0 }, { correta: 1 }, { correta: 2 }];

test('pontuação máxima', () => {
  assert.equal(calcularPontuacao(perguntas, [0, 1, 2]), 3);
});

test('pontuação zero', () => {
  assert.equal(calcularPontuacao(perguntas, [2, 0, 1]), 0);
});

test('pontuação parcial', () => {
  assert.equal(calcularPontuacao(perguntas, [0, 1, 0]), 2);
});

test('mensagem de acerto total', () => {
  assert.equal(mensagemResultado(5, 5), 'Perfeito!');
});

test('mensagem de incentivo', () => {
  assert.equal(mensagemResultado(1, 5), 'Continue estudando!');
});
