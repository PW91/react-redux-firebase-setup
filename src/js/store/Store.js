import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from '../reduxReducers/combineReducers';

const logger = createLogger({
    collapsed: true
})

export default createStore(reducer, applyMiddleware(logger));