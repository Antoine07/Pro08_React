import { ADD_DRAGON, INCREMENT, SET_DRAGON, DELETE_DRAGON, SHUFFLE_DRAGON } from "../constants/actions";

// initialisation des states
let stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    count: 3,
    elements: ["Feu", "Eau", "Air"],
    count2: 0,
    message: '',
    dragon: '' // saisi du dragon dans le formulaire
}
let reducerDragon = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_DRAGON:

            return { ...state, dragon: action.payload }

        case ADD_DRAGON:

            if (state.dragon === '' || state.dragons.filter(dragon => dragon === state.dragon).length > 0) {

                return { ...state, message: `Attention le dragon ${state.dragon} existe déjà ou le champ est vide` }
            }

            console.log(action)

            return {
                ...state,
                dragons: [...state.dragons, state.dragon],
                message: `Merci pour avoir ajouter ce dragon ${state.dragon} `,
                dragon: '',
                count: state.count + 1
            }

        case INCREMENT:

            return {
                ...state,
                count2: action.payload + state.count2
            };

        case DELETE_DRAGON:

            const dragons = state.dragons.filter(dragon => dragon != action.payload)

            return { ...state, dragons: dragons, count: state.count - 1 }

        case SHUFFLE_DRAGON:
            state.dragons.reverse();

            return { ...state, dragons: [ ...state.dragons ] }

        default:
            return state;
    }
    return state
}

export default reducerDragon;