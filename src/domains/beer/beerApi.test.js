import {baseUrl, beerApiFactory} from './beerApi';
import {getBeer} from './mockData';

describe('beerApi', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });

    it('makes a call to get recommended beers', (done) => {
        fetch.mockResponseOnce(JSON.stringify([getBeer()]));

        const service = beerApiFactory();
        service.findBeersByMatchingFood('chicken').then((res) => {
            expect(res).toEqual([getBeer()]);

            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(`${baseUrl}beers?food=chicken`);
            done();
        });
    });
});