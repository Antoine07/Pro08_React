
import { ADD_DRAGON, SET_DRAGON, INCREMENT, DELETE_DRAGON, SHUFFLE_DRAGON } from '../constants/actions';

export const add = () => { return { type: ADD_DRAGON }  } ;
export const increment = payload => { return { type: INCREMENT, payload } } ;

// controler la saisie
export const setDragon = payload => { return { type: SET_DRAGON, payload } } ;

export const deleteDragon = payload => { return { type: DELETE_DRAGON, payload } } ;


export const reverse = () => { return { type: SHUFFLE_DRAGON  } } ;