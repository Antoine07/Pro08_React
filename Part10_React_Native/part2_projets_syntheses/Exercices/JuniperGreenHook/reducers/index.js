import { combineReducers } from 'redux';

import juniper from './juniper';
import score from './score';

export default combineReducers({
    // clés du store  state.juniper ou state.score
    juniper, 
    score
});