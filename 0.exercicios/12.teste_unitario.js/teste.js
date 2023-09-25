const calculo = require('./calculo'); // Importe a função calculo
const { calcular } = require('./calculo'); // Se a função estiver em um módulo separado

test('Soma números corretamente', () => {
  expect(calculo("+", 1, [20, 30, 40, 50])).toBe(141);
});

test('Multiplica números corretamente', () => {
  expect(calculo("*", 2, [2, 3, 4])).toBe(48);
});

test('Subtrai números corretamente', () => {
  expect(calculo("-", 10, [5, 2, 1])).toBe(2);
});

test('Divide números corretamente', () => {
  expect(calculo("/", 100, [5, 2])).toBe(10);
});

test('Lida com erro corretamente', () => {
  expect(() => calculo("%", 1, [1])).toThrow("número, operador ou acumulador inválido");
});
