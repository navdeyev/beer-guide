import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer'
import {serviceMapFactory} from './services';
import rootSaga from './rootSaga';

export const initStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const enhancer = process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

    const store = createStore(rootReducer, enhancer);

    const servicesMap = serviceMapFactory();
    sagaMiddleware.run(rootSaga, servicesMap);

    return store;
};
