import { INCREMENT, DECREMENT } from "../constants/actions";

const stateInit = {
    count: 0,
    message : ''
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case INCREMENT:

            return {
                ...state, count: state.count + 1, message : ''
            }

        case DECREMENT:

            if( state.count === 0 ){

                return {
                    ...state,
                    message : "Le compteur ne peut pas être négatif ..."
                }
            }

            return {
                ...state, count: state.count - 1, message : ''
            }

        default:
            return state;
    }
}