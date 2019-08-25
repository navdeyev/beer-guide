import React from 'react';
import {shallow} from 'enzyme';
import LinearProgress from '@material-ui/core/LinearProgress';

import {LoadingStates} from '../domains/beer/beerReducer';
import {_BeerContainer, mapStateToProps} from './BeerContainer';
import {BeerForm} from './components/BeerForm';
import {BeerTable} from './components/BeerTable';

describe('BeerContainer', () => {

    describe('_BeerContainer', function () {
        const props = {findBeer: jest.fn(), beers: []};

        it('renders only the form when loading state is NOT_STARTED', () => {
            const rendered = shallow(<_BeerContainer {...props} loadingState={LoadingStates.NOT_STARTED}/>);
            const beerForm = rendered.find(BeerForm);
            expect(beerForm.exists()).toBe(true);
            expect(rendered.find(LinearProgress).exists()).toBe(false);
            expect(rendered.find({'data-qa': 'error'}).exists()).toBe(false);
            expect(rendered.find(BeerTable).exists()).toBe(false);
        });

        it('renders CircularProgress when loading state is LOADING', () => {
            const rendered = shallow(<_BeerContainer {...props} loadingState={LoadingStates.LOADING}/>);
            expect(rendered.find(LinearProgress).exists()).toBe(true);
        });

        it('renders error text when loading state is ERROR', () => {
            const rendered = shallow(<_BeerContainer {...props} loadingState={LoadingStates.ERROR}/>);
            const boxComponent = rendered.find({'data-qa': 'error'});
            expect(boxComponent.exists()).toBe(true);
            expect(boxComponent.text()).toBe('Something went wrong!');
        });

        it('renders BeerTable when loading state is COMPLETE', () => {
            const rendered = shallow(<_BeerContainer {...props} loadingState={LoadingStates.COMPLETE}/>);
            const tableComponent = rendered.find(BeerTable);
            expect(tableComponent.exists()).toBe(true);
        });
    });

    describe('mapStateToProps', () => {
        it('mapStateToProps', () => {
            const state = {
                beersState: {
                    beers: [],
                    loadingState: LoadingStates.COMPLETE,
                }
            };
            expect(mapStateToProps(state)).toEqual({
                beers: [],
                loadingState: LoadingStates.COMPLETE
            });
        });
    });
});