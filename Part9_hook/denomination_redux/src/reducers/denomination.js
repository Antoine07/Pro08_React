
const initialState = {
    tokens: new Map(),
    amount: '',
    message: '',
    denominations: new Map(
        [
            ['denomination_1', [10, 5, 3, 2, 1]],
            ['denomination_2', [100, 50, 20, 10, 5, 1]]
        ]),
    option: 'denomination_1'
}

export default (state = initialState, action = {}) => {

    switch ( action.type ) {

        case 'SET_OPTION':
            if (action.option)

                return {
                    ...state,
                    option: action.option,
                    tokens : new Map()
                }

        case 'SET_AMOUNT':

            return {
                ...state,
                amount: action.amount
            }

        case 'RESET':

            return {
                ...state,
                tokens: new Map(),
                amount: '', message: ''
            }

        case 'CALCUL_TOKENS':

            if (state.amount === '')
                return {
                    ...state,
                    message: "votre champ est vide recommencer"
                }

            let amount = parseInt(state.amount);
            state.tokens = new Map();
            state.tokens.set('amount', amount);

            let q;
            for (const d of state.denominations.get(state.option)) {
                if (amount >= d) {
                    q = Math.floor(amount / d);
                    state.tokens.set(d, q);
                    amount = amount % d;
                }
            }

            return {
                ...state,
                tokens: state.tokens,
                amount: '',
                message: ''
            }

        default:
            return state;
    }
}