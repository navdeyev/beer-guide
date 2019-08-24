import React from 'react';

import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

export const BeerForm = ({onSubmit, useState = React.useState}) => {
    const [mealDescription, setMealDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(mealDescription);
    };

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={submitHandler}>
                <TextField
                    fullWidth={true}
                    id="meal"
                    label="Meal description"
                    value={mealDescription}
                    onChange={(e) => setMealDescription(e.currentTarget.value)}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="inherit"
                    disabled={mealDescription === ''}>
                    Find me a beer!
                </Button>
            </form>
        </>
    );
};