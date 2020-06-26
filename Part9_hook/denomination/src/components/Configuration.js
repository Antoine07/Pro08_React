import React, { useContext, useState } from 'react';

import {
    Redirect
} from "react-router-dom";

import { DenominationContext } from '../DenominationProvider';

const Configuration = (props) => {
    const [state, dispatch] = useContext(DenominationContext);
    const { option } = state;

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setRedirect(true);
    }

    if (redirect) return (
        <Redirect to="/" />
    )

    return (
        <div className="Configuration">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Configuration</label>
                    <label>
                        Choix de la dénomination :
                        <select value={option} onChange={e =>
                            dispatch({
                                type: 'SET_OPTION', option: option
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
