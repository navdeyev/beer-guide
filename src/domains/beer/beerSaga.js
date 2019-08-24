import {all} from 'redux-saga/effects';

function* beerSaga(serviceMap) {
    console.log('beerSaga', serviceMap);
    yield all([]);
}

export default beerSaga;
