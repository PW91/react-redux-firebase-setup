import {createStore} from 'redux';
import reducer from '../reduxReducers/combineReducers';

export default createStore(reducer);