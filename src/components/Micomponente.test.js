import MiComponente, { titleCase, divide, sum, isapple, isEmpty } from './MiComponente';

describe('titleCase', () => {
  it('should capitalize the first letter of each word', () => {
    expect(titleCase('estamos todos bien')).toBe('Estamos Todos Bien');
  });

  it('should return an empty string for an empty input', () => {
    expect(titleCase('')).toBe('');
  });
});

describe('divide', () => {
    it('should return a number', () => {
      const result = divide(10, 2);
      expect(typeof result).toBe('number');
    });
  
    it('should return null for a string input', () => {
      const result = divide('abc', 'def');
      expect(result).toBeNull();
    });
  
    it('should perform division of 10 and 2', () => {
      const result = divide(10, 2);
      expect(result).toBe(5);
    });
  
    it('should perform division of 10 and 4 with precision (using toBeCloseTo())', () => {
      const result = divide(10, 4);
      expect(result).toBeCloseTo(2.5);
    });
  
    it('should return null for division by 0', () => {
      const result = divide(5, 0);
      expect(result).toBeNull();
    });
  });

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(3, 5)).toBe(8);
  });

  it('should return null for non-numeric inputs', () => {
    expect(sum('abc', 'def')).toBeNull();
  });
});

describe('isapple', () => {
  it('should return a boolean', () => {
    const result = isapple('manzana');
    expect(typeof result).toBe('boolean');
  });

  it('should return true for the string "manzana"', () => {
    const result = isapple('manzana');
    expect(result).toBeTruthy();
  });

  it('should return false for a string that is not "manzana"', () => {
    const result = isapple('banana');
    expect(result).toBeFalsy();
  });
});

describe('isEmpty', () => {
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return false for non-null values', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(42)).toBe(false);
    expect(isEmpty({ key: 'value' })).toBe(false);
  });
});


