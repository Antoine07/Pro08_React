// import { } from './constants/actions';

const initialState = {
    count: 0,
    status: false
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'INCREMENT_COUNTER': {

            return {
                ...state,
                count: state.count + 1
            }
        }

        case "STOP_COUNTER":

            return {
                ...state,
                count: 0,
                status: false
            }

        default:
            return state;
    }
}