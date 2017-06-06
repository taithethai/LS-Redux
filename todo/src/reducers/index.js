import {combineReducers} from 'redux';
import ListReducer from './list';

const rootReducer = combineReducers({
  theList: ListReducer,
});

export default rootReducer;