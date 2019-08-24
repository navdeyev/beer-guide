import React from 'react';
import {shallow} from 'enzyme';

import {BeerForm} from './BeerForm';

describe('BeerForm', () => {
    it('executes onSubmit', () => {
        const onSubmit = jest.fn();
        const rendered = shallow(<BeerForm onSubmit={onSubmit}/>);
        const form = rendered.find('form');
        const event = {preventDefault: jest.fn()};
        form.props().onSubmit(event);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(onSubmit).toHaveBeenCalled();
    });
});