import {beers, loadingState, LoadingStates} from './beerReducer';
import * as actions from './beerActions';

describe('beerReducer', () => {

    describe('beers', () => {
        const beersArray = ['Some beer'];

        it('returns the initial state when called with no parameters', () => {
            expect(beers(undefined, {type: '@@INIT'})).toEqual([]);
        });

        it('resets the state on loadBeersPending to clean up previous search result', () => {
            const action = actions.loadBeersPending();
            expect(beers(beersArray, action)).toEqual([]);
        });

        it('updates the state on loadBeersSuccess', () => {
            const action = actions.loadBeersSuccess(beersArray);
            expect(beers([], action)).toEqual(beersArray);
        });

        it('resets the state on loadBeersError', () => {
            const action = actions.loadBeersError(new Error('Something went wrong!'));
            expect(beers(beersArray, action)).toEqual([]);
        });
    });

    describe('loadingState', () => {
        it('returns the initial state when called with no parameters', () => {
            expect(loadingState(undefined, {type: '@@INIT'})).toEqual(LoadingStates.NOT_STARTED);
        });

        it('set the state to LOADING on loadBeersPending', () => {
            const action = actions.loadBeersPending();
            expect(loadingState(LoadingStates.ERROR, action)).toEqual(LoadingStates.LOADING);
        });

        it('set the state to COMPLETE on loadBeersSuccess', () => {
            const beersArray = ['Some beer'];
            const action = actions.loadBeersSuccess(beersArray);
            expect(loadingState(LoadingStates.LOADING, action)).toEqual(LoadingStates.COMPLETE);
        });

        it('set the state to ERROR on loadBeersError', () => {
            const action = actions.loadBeersError(new Error('Something went wrong!'));
            expect(loadingState(LoadingStates.LOADING, action)).toEqual(LoadingStates.ERROR);
        });
    });

});