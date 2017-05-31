import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger'

import App from './App';
import SignIn from './containers/SignIn';
import SignUpPage from './containers/SignUpPage';
import NivelPage from './containers/NivelPage';
import reducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/game" component={App} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/nivel" component={NivelPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
