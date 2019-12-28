import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import persistState from "redux-localstorage";

import initial from './Data/initial';
import reducer from './Data/reducer';

const composeEnhancers = 
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer, 
    initial,
    composeEnhancers(persistState())
);

ReactDOM.render(
    <Provider store={ store }>
         <App/>
    </Provider>,
    document.getElementById("root")
);

