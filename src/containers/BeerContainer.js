import React from 'react';
import {connect} from 'react-redux';
import {Box} from '@material-ui/core';

import * as actions from '../domains/beer/beerActions';
import {LoadingStates} from '../domains/beer/beerReducer';

import {BeerForm} from './components/BeerForm';
import {BeerTable} from './components/BeerTable';

export const _BeerContainer = ({findBeer, loadingState, beers}) => {
    return (
        <Box>
            <BeerForm onSubmit={findBeer}/>
            {loadingState === LoadingStates.LOADING && <Box data-qa="loading" align="center">Loading</Box>}
            {loadingState === LoadingStates.COMPLETE && <BeerTable beers={beers}/>}
            {loadingState === LoadingStates.ERROR && <Box data-qa="error" align="center">Something went wrong!</Box>}
        </Box>
    );
};

export const mapStateToProps = (state) => {
    return {
        beers: state.beersState.beers,
        loadingState: state.beersState.loadingState
    };
};

const mapDispatchToProps = {
    findBeer: actions.findBeer
};

export const BeerContainer = connect(mapStateToProps, mapDispatchToProps)(_BeerContainer);
