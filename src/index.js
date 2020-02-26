import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRedux from './AppRedux'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'


// function loggerMidleware(store) {
//     return function(next) {
//         return function(action) {
//             const result = next(action) 
//             console.log('Middleware', store.getState())
//             return result
//         }
//     }
// }

const loggerMidleware = store => next => action => { 
    const result = next(action) 
    console.log('Middleware', store.getState())
    return result
} 


const store = createStore(rootReducer, applyMiddleware(loggerMidleware))

const appRedux = (
    <Provider store={store}>
        <AppRedux title={'hello, this is my first work with Redax'} />
    </Provider>
)


ReactDOM.render(
    appRedux,
    document.getElementById('root'));
serviceWorker.unregister();
