import {beerApiFactory} from './beer/beerApi';

export const serviceMapFactory = () => {
    return {
        beerApiService: beerApiFactory()
    };
};
