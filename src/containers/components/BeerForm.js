import React from 'react';
import {makeStyles} from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
    },
});

export const BeerForm = ({onSubmit, useState = React.useState}) => {
    const classes = useStyles();
    const [mealDescription, setMealDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(mealDescription);
    };

    return (
        <form noValidate autoComplete="off" onSubmit={submitHandler} className={classes.root}>
            <TextField
                fullWidth={true}
                id="meal"
                label="Meal description"
                value={mealDescription}
                onChange={(e) => setMealDescription(e.currentTarget.value)}
                margin="normal"
                variant="standard"
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={mealDescription === ''}>
                Find me a beer!
            </Button>
        </form>
    );
};