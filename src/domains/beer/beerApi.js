export const baseUrl = 'https://api.punkapi.com/v2/';

export const beerApiFactory = () => {
    return {
        findBeersByMatchingFood: (mealDescription) =>
            fetch(`${baseUrl}beers?food=${mealDescription}`, {method: 'GET'})
                .then(response => response.json())
    }
};
