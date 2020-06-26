import React, { useContext, useState } from 'react';

import {
    Redirect
} from "react-router-dom";

import { DenominationContext } from '../DenominationProvider';

const Configuration = () => {
    const [state, dispatch] = useContext(DenominationContext);
    const { option, denominations } = state;
    
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setRedirect(true);
    }

    if ( redirect ) return (
        <Redirect to="/" />
    )

    return (
        <div className="Configuration">
            { [ ...denominations.keys() ].map((k, i) => 
                <p key={i}> Dénomination {i+1} <br /> { [ ...denominations.get(k).values() ].join(" ") }</p>
            ) }
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Configuration</label>
                    <label>
                        Choix de la dénomination :
                        <select value={option} onChange={e =>
                            dispatch({
                                type: 'SET_OPTION', 
                                option: e.target.value
                            })}>
                            <option value="denomination_1">Dénomination 1</option>
                            <option value="denomination_2">Dénomination 2</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default Configuration;
