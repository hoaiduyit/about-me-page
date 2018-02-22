import {combineReducers} from 'redux';
import contactReducer from './contactReducer'

const reducer = combineReducers({
    contact: contactReducer
});

export default reducer