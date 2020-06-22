import { SET_NUMBER } from '../constants/actions';

export const setNumber = payload => {
    return { 
        type: SET_NUMBER, payload 
    }
};