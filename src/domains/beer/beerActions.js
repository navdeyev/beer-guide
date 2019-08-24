export const beerActionTypes = {
    FIND_BEER: 'FIND_BEER',
    LOAD_BEERS_PENDING: 'LOAD_BEERS_PENDING',
    LOAD_BEERS_SUCCESS: 'LOAD_BEERS_SUCCESS',
    LOAD_BEERS_ERROR: 'LOAD_BEERS_ERROR',
};

export const findBeer = (mealDescription) => ({type: beerActionTypes.FIND_BEER, payload: mealDescription});
export const loadBeersPending = () => ({type: beerActionTypes.LOAD_BEERS_PENDING});
export const loadBeersSuccess = (beers = []) => ({type: beerActionTypes.LOAD_BEERS_SUCCESS, payload: beers});
export const loadBeersError = (error) => ({type: beerActionTypes.LOAD_BEERS_ERROR, payload: error});
