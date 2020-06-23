import { SET_NUMBER, INIT_MULTIPLICATIONS, SEND_USER_CHOICE, RESET_NUMPAD, RESTART } from '../constants/actions';

import { multiplications, MAX_MULTIPLICATIONS } from '../actions/actions-types';

const stateInit = {
    numbers: [],
    numpad: [...Array(10).keys()].slice(1).concat([0]),
    multiplications: [],
    multiplication: '',
    status: true,
    score: 0,
    step: 0,
    total: MAX_MULTIPLICATIONS * MAX_MULTIPLICATIONS,
    message :''
}

export default (state = stateInit, action = {}) => {

    let newMultiplications, newMultiplication;

    switch (action.type) {

        case RESET_NUMPAD:

            return {
                ...state,
                numbers: [],
                message : ''
            }

        case SET_NUMBER:

            return {
                ...state,
                numbers: [
                    ...state.numbers,
                    action.payload,
                ],
                message : ''
            }

        case RESTART:
        case INIT_MULTIPLICATIONS:

            newMultiplications = multiplications();
            newMultiplication = newMultiplications.shift()

            return {
                ...state,
                multiplications: newMultiplications,
                multiplication: newMultiplication,
                step: newMultiplications.length,
                numbers: [],
                score: 0,
                status: true
            }

        case SEND_USER_CHOICE:

            if (state.numbers.length === 0) {

                return {
                    ...state,
                    message: { content : "Attention votre champ est vide recommencer", type : "danger" }
                }
            }

            const userChoice = Number(state.numbers.join(''));

            newMultiplications = [...state.multiplications];
            newMultiplication = newMultiplications.shift();

            const success = userChoice === state.multiplication.num1 * state.multiplication.num2 ;

            if (state.step === 0) {

                return {
                    ...state,
                    status: false,
                    score: success ? state.score + 1 : state.score,
                    numbers: [],
                    multiplications: newMultiplications,
                    message : success ? { content : "bravo", type : "success"} : { content : "raté", type : "danger" }
                }
            }

            return {
                ...state,
                multiplication: newMultiplication,
                score: userChoice === state.multiplication.num1 * state.multiplication.num2 ? state.score + 1 : state.score,
                step: newMultiplications.length,
                numbers: [],
                multiplications: newMultiplications,
                message : success ? { content : "bravo", type : "success"} : { content : "raté", type : "danger" }
            }

        default:

            return state;

    }
}