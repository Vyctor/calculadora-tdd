const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => (b === 0 ? 'Não é possível dividir por zero!' : a / b);
const mult = (a, b) => a * b;

export { sum, sub, div, mult };
