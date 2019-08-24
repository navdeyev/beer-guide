import {expectSaga} from 'redux-saga-test-plan';

import {loadBeers, mapToBeerSummary} from './beerSaga';
import * as actions from './beerActions';
import {getBeer, getBeerSummary} from './mockData';

describe('beerSaga', () => {

    describe('mapToBeerSummary', () => {
        it('transforms the detailed beer object to summary', () => {
            expect(mapToBeerSummary(getBeer())).toEqual(getBeerSummary());
        });
    });

    describe('loadBeers', () => {
        it('dispatches a loadBeersPending action to update loading state', () => {
            const action = actions.findBeer('Burger');
            const beerApiService = {
                findBeersByMatchingFood: jest.fn(),
            };
            return expectSaga(loadBeers, beerApiService, action)
                .put(actions.loadBeersPending())
                .run();
        });

        it('dispatches a loadBeersSuccess action with summary objects on a valid response from the backend', () => {
            const action = actions.findBeer('Chicken');
            const resolvedValue = [getBeer()];
            const beerApiService = {
                findBeersByMatchingFood: jest.fn().mockResolvedValue(resolvedValue),
            };
            return expectSaga(loadBeers, beerApiService, action)
                .put(actions.loadBeersSuccess([getBeerSummary()]))
                .run();
        });

        it('dispatches a loadBeersError action on an invalid response from the backend', () => {
            const action = actions.findBeer('Burger');
            const rejectedValue = new Error('Something went wrong!');
            const beerApiService = {
                findBeersByMatchingFood: jest.fn().mockRejectedValue(rejectedValue),
            };
            return expectSaga(loadBeers, beerApiService, action)
                .put(actions.loadBeersError(rejectedValue))
                .run();
        });
    });

});