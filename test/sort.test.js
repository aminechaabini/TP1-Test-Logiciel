import { test, expect } from 'vitest';
import { sort } from '../src/sort.js'; 



    test('trier un tableau vide', () => {
        expect(sort([])).toEqual([]);
    });

    test('trier un tableau déjà trié', () => {
        expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('trier un tableau inversé', () => {
        expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('trier un tableau avec des nombres négatifs', () => {
        expect(sort([-3, 5, -1, 0, 2])).toEqual([-3, -1, 0, 2, 5]);
    });

    test('gérer les tableaux avec des nombres en virgule flottante', () => {
        expect(sort([2.5, 1.1, 3.7, 0.5])).toEqual([0.5, 1.1, 2.5, 3.7]);
    });

    test('lever une erreur pour un tableau contenant des éléments non numériques', () => {
        expect(() => sort(['a', 'b', 'c'])).toThrow('Le tableau doit contenir uniquement des nombres.');
    });
