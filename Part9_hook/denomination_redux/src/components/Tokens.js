import React from 'react';


const Tokens = ({ tokens }) => {

    // Map get récupère delete supprime
    const amount = tokens.get('amount');
    tokens.delete('amount');

    // On crée un tableau pour pouvoir le parcourir dans le render
    // en utilisant les clés du Map et l'opérateur spread

    return (
        <>
            <h2>Montant : {amount}</h2>
            {   [ ...tokens.keys() ].map((d, i) =>{
                return (
                    <p key={i}>Denomination : {d} quantité : {tokens.get(d)}</p>
                )
            }
            )}
        </>
    );
}

export default Tokens;
