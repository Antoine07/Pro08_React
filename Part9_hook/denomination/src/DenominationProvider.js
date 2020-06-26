import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducers/denomination';

export const DenominationContext = createContext();

export const DenominationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <DenominationContext.Provider value={[state, dispatch]}>
            {children}
        </DenominationContext.Provider>
    )
}