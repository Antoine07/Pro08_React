const stateInit = {
   memories : []
}

export default (state = stateInit, action = {}) => {

    switch (action.type) {

        case 'SET_MEMORY':

            return { ...state, memories : state.memories.concat(action.payload)}

        default:

            return state;

    }
}