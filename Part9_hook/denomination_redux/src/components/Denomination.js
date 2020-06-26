import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Tokens from './Tokens';

const Denomination = () => {
    
    const { amount, tokens, option, denominations } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'CALCUL_TOKENS' })
    }

    return (
        <div className="Denomination">
            <h2>Rentrez votre montant </h2>
            <p>Vous utilisez les tokens suivants : {[ ...denominations.get(option).values() ].join(" ")}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="text"
                        className="form-control"
                        value={amount}
                        onChange={e => dispatch({
                            type: 'SET_AMOUNT',
                            amount: e.target.value
                        })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
            {/* size donne la dimension de votre Map JS nombre d'élément(s)  */}
            {tokens.size > 0 && <Tokens tokens={tokens} />}
        </div>
    );
}

export default Denomination;
