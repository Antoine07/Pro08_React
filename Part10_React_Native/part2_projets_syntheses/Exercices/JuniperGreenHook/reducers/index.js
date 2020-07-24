import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import juniper from './juniper';
import score from './score';
import counter from './counter';

const rootPersistConfig = {
    key: 'root', // clé unique pour la peristance de ton store
    storage: storage // quel storage on utilise 
}

export default persistCombineReducers(rootPersistConfig, {
    juniper,
    score,
    counter
})