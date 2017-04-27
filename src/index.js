import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    // <Provider />
    // Makes the Redux store available to the connect() calls in the
    // component hierarchy below
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
