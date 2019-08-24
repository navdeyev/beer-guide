import {all, call, put, takeEvery} from 'redux-saga/effects';

import * as actions from './beerActions';

export const mapToBeerSummary = (beer) => ({
    id: beer.id,
    name: beer.name,
    description: beer.description,
    first_brewed: beer.first_brewed,
});

export function* loadBeers(beerApiService, action) {
    yield put(actions.loadBeersPending());

    try {
        const beers = yield call(beerApiService.findBeersByMatchingFood, action.payload);

        const summaries = beers.map(mapToBeerSummary);

        yield put(actions.loadBeersSuccess(summaries));
    } catch (e) {
        yield put(actions.loadBeersError(e));
    }
}

function* beerSaga(serviceMap) {
    yield all([
        takeEvery(actions.beerActionTypes.FIND_BEER, loadBeers, serviceMap.beerApiService),
    ]);
}

export default beerSaga;
