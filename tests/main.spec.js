import { expect } from 'chai';
import { sum, sub, div, mult } from '../src/main';

describe('Calc Test Suite', () => {
  describe('Smoke Tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    it('should exist the method `sum`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(8,4)`', () => {
      expect(sub(8, 4)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 1 when `sub(2,2)`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `sub(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

    it('should not divide by zero', () => {
      expect(div(4, 0)).to.be.equal('Não é possível dividir por zero!');
    });
  });
});
