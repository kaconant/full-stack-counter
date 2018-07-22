import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 1. create Redux Store

let store = createStore(rootReducer);

// passing props to every component
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
