import { SET_NUMBER, INIT_MULTIPLICATIONS } from '../constants/actions';

export const setNumber = payload => {
    return { 
        type: SET_NUMBER, payload 
    }
};


export const initMultiplications = () => {
    return { 
        type: INIT_MULTIPLICATIONS 
    }
};


// fonctions utiles
export const shuffle = array => {
     array.sort(() => Math.random() - .5);

     return array;
}

export const multiplications = (max = 9) => {
    let propositions = [];
    for(let i = 1; i < max + 1; i++){
        for(let j = 1; j < max + 1; j++){
            propositions.push({num1 : i, num2 : j});
        }
    }

    return shuffle(propositions);
};