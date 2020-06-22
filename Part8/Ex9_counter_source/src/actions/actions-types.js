import {
    INCREMENT, 
    DECREMENT,
    INIT_MESSAGE
} from '../constants/actions';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};
