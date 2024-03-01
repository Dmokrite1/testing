import { InMemoryDataService } from "./in-memory-data.service"

describe('InMemoryDataService', () => {
    it('Throws an error when genIg() is called with an empty array', () => {
        const inMemory = new InMemoryDataService();

        expect(() => inMemory.genId([])).toThrowError('cannot use an empty array');
    });
});