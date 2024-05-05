import { test, expect } from 'vitest';
import { toUpperCase } from '../src/string.js'; 

test('Test de la fonction toUpperCase avec chaine vide', () => {
    const result = toUpperCase("");
    expect(result).toBe("");
});

test('Test de la fonction toUpperCase avec chaine minuscules', () => {
    const result = toUpperCase("hello");
    expect(result).toBe("HELLO");
});

test('Test de la fonction toUpperCase avec caractères speciaux', () => {
    const result = toUpperCase("-@_##");
    expect(result).toBe("-@_##");
});