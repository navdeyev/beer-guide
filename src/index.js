import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import {initStore} from './domains/initStore';

import './index.css';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App/>
    </Provider>,
    document.getElementById('root')
);
