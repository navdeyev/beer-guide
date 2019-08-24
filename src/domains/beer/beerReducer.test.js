import {beers} from './beerReducer';

describe('beerReducer', () => {

    it('returns the initial state when called with no parameters', () => {
        expect(beers()).toEqual([]);
    });

});