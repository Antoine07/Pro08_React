import { SET_NUMBER, INIT_MULTIPLICATIONS } from '../constants/actions';

import { multiplications } from '../actions/actions-types';


const stateInit = {
    numbers: [],
    numpad: [ ...Array(10).keys() ].slice(1).concat([0]),
    multiplications : []
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_NUMBER:

            return {
                ...state,
                numbers: [
                    ...state.numbers,
                    action.payload,
                ]
            }

        case INIT_MULTIPLICATIONS:

            console.log("multiplications")

            return {
                ...state,
                multiplications : multiplications()
            }

        default:

            return state;

    }
}