import React from 'react';
import {Container} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';

import {BeerContainer} from './containers/BeerContainer';

const polishRed = '#dc143c';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: polishRed,
        },
        text: {
            primary: polishRed,
            secondary: polishRed,
        },
    },
    // There's a GitHub issue on this one - https://github.com/mui-org/material-ui/issues/13817
    overrides: {
        MuiInput: {
            underline: {
                "&:before": {
                    borderBottom: `1px solid ${polishRed}`
                }
            }
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <BeerContainer/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
