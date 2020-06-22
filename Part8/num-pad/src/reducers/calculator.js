import { SET_NUMBER } from '../constants/actions';

const stateInit = {
    numbers: [],
    numpad: [ ...Array(11).keys() ].slice(1)
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

        default:

            return state;

    }
}