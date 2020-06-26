import React, { useContext } from 'react';

import { DenominationContext } from '../DenominationProvider';

import Tokens from './Tokens';



const Denomination = () => {

    // on récupère le contexte API pour consommation
    const [state, dispatch] = useContext(DenominationContext);

    const { amount, tokens } = state;

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: 'CALCUL_TOKENS' })
    }


    return (
        <div className="Denomination">
            <h2>Rentrez votre montant </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Amount</label>
                    <input
                        type="text"
                        className="form-control"
                        value={amount}
                        onChange={e => dispatch({ type: 'SET_AMOUNT', amount: e.target.value })}
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
