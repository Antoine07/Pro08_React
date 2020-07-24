// import { } from './constants/actions';

const initialState = {
    data: [],
    status: true
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'SAVE_SCORE': {
            const { data } = action;

            const info = [ ...data.values() ];

            const dateTime = (new Date).toTimeString();

            const saveInfo = { date : dateTime, info : info }

            return {
                ...state,
                data: state.data.concat(saveInfo),
                status: false
            }
        }

        case 'INIT_GAME':

            return {
                ...state,
                status : true
            }

        default:
            return state;
    }
}