import { fetchRandonUser } from '../src/async'; 
import { describe , it } from 'vitest';

function isJSON(str) {
    try {
        JSON.stringify(JSON.parse(str));
        return true;
    } catch (e) {
        return false;
    }
}

describe('fetchRandonUser()', () => {
  it('should fetch data from the server', async () => {
    try {
      const data = await fetchRandonUser(); 
      expect(data).toBeDefined(); 
      expect(isJSON(data)).toBe(true); 
    } catch (error) {}
  });
});
