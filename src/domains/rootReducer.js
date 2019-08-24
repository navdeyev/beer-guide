import {combineReducers} from 'redux';

import beerReducer from './beer/beerReducer';

export const rootReducer = combineReducers({
    beersState: beerReducer,
});
