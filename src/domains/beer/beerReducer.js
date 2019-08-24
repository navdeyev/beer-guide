import {combineReducers} from 'redux';
import {beerActionTypes} from './beerActions';

export const LoadingStates = {
    NOT_STARTED: 'NOT_STARTED',
    LOADING: 'LOADING',
    COMPLETE: 'COMPLETE',
    ERROR: 'ERROR',
};

const actionToLoadingStateMap = {
    [beerActionTypes.LOAD_BEERS_PENDING]: LoadingStates.LOADING,
    [beerActionTypes.LOAD_BEERS_SUCCESS]: LoadingStates.COMPLETE,
    [beerActionTypes.LOAD_BEERS_ERROR]: LoadingStates.ERROR,
};

export const loadingState = (state = LoadingStates.NOT_STARTED, action) => {
    const loadingState = actionToLoadingStateMap[action.type];
    return loadingState || state;
};

export const beers = (state = [], action) => {
    switch (action.type) {
        case beerActionTypes.LOAD_BEERS_PENDING:
            return [];
        case beerActionTypes.LOAD_BEERS_SUCCESS:
            return action.payload;
        case beerActionTypes.LOAD_BEERS_ERROR:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    loadingState,
    beers,
});
