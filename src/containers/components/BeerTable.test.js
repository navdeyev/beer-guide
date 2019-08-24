import React from 'react';
import {shallow} from 'enzyme';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';

import {BeerTable} from './BeerTable';
import {getBeerSummary} from '../../domains/beer/mockData';

describe('BeerTable', () => {
    it('renders no data label when there is no data to render', () => {
        const rendered = shallow(<BeerTable beers={[]}/>);
        expect(rendered.find({'data-qa':'no-data'}).exists()).toBe(true);
        expect(rendered.find(Table).exists()).toBe(false);
    });

    it('renders a table when there is data to render', () => {
        const rendered = shallow(<BeerTable beers={[getBeerSummary()]}/>);
        expect(rendered.find({'data-qa':'no-data'}).exists()).toBe(false);
        expect(rendered.find(Table).exists()).toBe(true);

        let tableRow = rendered.find(TableRow);
        expect(tableRow.exists()).toBe(true);
        expect(tableRow.length).toBe(2);
    });
});