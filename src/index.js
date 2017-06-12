import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import middleware from './middleware';
import reducer from './reducers';
import App from './components/App';
import './styles.css';

const store = middleware(createStore)(reducer);

ReactDom.render(
    <Provider store={store}>
       <App />
    </Provider>,
document.getElementById('root'));