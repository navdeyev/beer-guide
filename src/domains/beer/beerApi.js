export const beerApiFactory = () => {
    return {
        loadBeers: () => {
            return Promise.resolve([]);
        },
    }
};
