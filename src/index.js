import React          from 'react';
import ReactDOM       from 'react-dom';
import {Provider}     from 'react-redux';
import configureStore from 'app/core/store/configureStore';
import App            from 'app/containers/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);