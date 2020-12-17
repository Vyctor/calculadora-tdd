const { expect } = require('chai');
const calc = require('../src/main.js');

describe('Calc Test Suite', () => {
  describe('Smoke Tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(8,4)`', () => {
      expect(calc.sub(8, 4)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 1 when `sub(2,2)`', () => {
      expect(calc.div(2, 2)).to.be.equal(1);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `sub(2,2)`', () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });

    it('should not divide by zero', () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível dividir por zero!');
    });
  });
});
