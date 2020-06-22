import { combineReducers } from 'redux';

import calculator from './calculator';
import memory from './memory';

export default combineReducers({
     calculator,
     memory
});