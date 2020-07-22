// import { } from './constants/actions';

const initialState = {
    numbers : []
}

export default (state= initialState, action = {}) => {

    switch(action.type){

        case 'NUMBERS':

            const numbers = [1, 2, 3]

            return {
                ...state,
                numbers
            }

        default :
            return state;
    }
}