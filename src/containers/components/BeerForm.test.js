import React from 'react';
import {shallow} from 'enzyme';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {BeerForm} from './BeerForm';

describe('BeerForm', () => {
    it('executes passed down onSubmit handler', () => {
        const onSubmit = jest.fn();
        const rendered = shallow(<BeerForm onSubmit={onSubmit}/>);
        const form = rendered.find('form');
        const event = {preventDefault: jest.fn()};
        form.props().onSubmit(event);
        expect(event.preventDefault).toHaveBeenCalled();
        expect(onSubmit).toHaveBeenCalled();
    });

    it('updates the state together with the input', () => {
        const setMealDescription = jest.fn();
        const props = {
            onSubmit: jest.fn(),
            useState: () => (['', setMealDescription]),
        };
        const rendered = shallow(<BeerForm {...props} />);

        const event = {
            currentTarget: {
                value: 'A'
            }
        };
        const textField = rendered.find(TextField);
        textField.props().onChange(event);

        expect(setMealDescription).toHaveBeenCalledWith('A');
    });

    it('shows disabled button when input is empty', () => {
        const props = {
            onSubmit: jest.fn(),
            useState: () => (['', jest.fn()]),
        };
        const rendered = shallow(<BeerForm {...props} />);
        const submitButton = rendered.find(Button);
        expect(submitButton.props().disabled).toBe(true);
    });

    it('shows enabled button when input is not empty', () => {
        const props = {
            onSubmit: jest.fn(),
            useState: () => (['Chicken', jest.fn()]),
        };
        const rendered = shallow(<BeerForm {...props} />);
        const submitButton = rendered.find(Button);
        expect(submitButton.props().disabled).toBe(false);
    });
});