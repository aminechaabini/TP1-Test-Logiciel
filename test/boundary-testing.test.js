import { test, expect } from 'vitest';
import { isPriceInRange } from '../src/boundary-testing.js'; 

test('Le prix est dans le range', () => {
  const result = isPriceInRange(5,2,10);
  expect(result).toBe(true);
});

test('Le prix n est pas dans le range', () => {
    const result = isPriceInRange(11,2,10);
    expect(result).toBe(false);
  });
