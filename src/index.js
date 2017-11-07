import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './App';
import Game from './containers/Game';
import Guide from './components/Guide';
import SignIn from './containers/auth/SignIn';
import SignOut from './containers/auth/SignOut';
import SignUp from './containers/auth/SignUp';
import StatsPage from './containers/StatsPage';

import HomePage from './components/HomePage';
import CongratsPage from './components/CongratsPage';
import NivelsPage from './containers/NivelsPage';
import reducers from './reducers';
import RequireAuth from './containers/auth/require_auth';
import { AUTH_USER } from './containers/auth/constants';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './bootstrap-3.3.7-dist/css/bootstrap.css';
// import './bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './index.css';

const store = createStore(reducers, applyMiddleware(reduxThunk), applyMiddleware(logger));

const token = localStorage.getItem('token');

if (token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/home" component={HomePage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signout" component={SignOut} />
                <Route path="/signup" component={SignUp} />
                <Route path="/game" component={RequireAuth(Game)} />
                <Route path="/nivels" component={RequireAuth(NivelsPage)} />
                <Route path="/stats" component={StatsPage} />
                <Route path="/congrats" component={CongratsPage} />
                <Route path="/guide" component={Guide} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
