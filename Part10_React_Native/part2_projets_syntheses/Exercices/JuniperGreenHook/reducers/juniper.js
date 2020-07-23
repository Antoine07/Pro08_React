import { INIT_GAME, MAX_JUNIPER } from '../constants/actions';
import { possibleDivisors, possibleMultiples } from '../actions/actions-types';

const initialState = {
    number: '',
    possibles: new Map( [] ),
    choices: new Map( [] ),
    valid: [],
    computer: '',
    player: '',
    message: '',
    flag_player: true,
    error: false,
    count : 1
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case 'NUMBERS':

            const numbers = [...Array(MAX_JUNIPER).keys()].map(num => num + 1);

            return {
                ...state,
                numbers
            }

        case INIT_GAME:

            const possibles = new Map();
            let valid = new Map();
            const choices = new Map();

            for(const num of Array(MAX_JUNIPER).keys() ){ 
                possibles.set(num + 1, num + 1);
            }

            const choice = Number( (Math.random() * 101).toFixed(0) );
            possibles.delete(choice);
            valid = new Map( [ ...possibleMultiples(choice, possibles), ...possibleDivisors(choice, possibles) ] ) ;
            choices.set(state.count, choice);

            return {
                ...state,
                possibles: possibles,
                choices : choices,
                valid: valid,
                computer: choice,
                message: "C'est à vous de jouer",
                flag_player: true,
                count : state.count + 1
            }

        default:
            return state;
    }
}