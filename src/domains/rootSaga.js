import {all, fork} from 'redux-saga/effects';

import beerSaga from './beer/beerSaga';

function* rootSaga(serviceMap) {
    yield all([
        fork(beerSaga, serviceMap)
    ]);
}

export default rootSaga;