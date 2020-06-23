import { 
    SET_NUMBER, 
    INIT_MULTIPLICATIONS, 
    SEND_USER_CHOICE,
    RESET_NUMPAD,
    RESTART,
    SET_MEMORY
 } from '../constants/actions';

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


export const sendUserChoice = () => {
    return { 
        type: SEND_USER_CHOICE 
    }
};

export const restart = () => {
    return { 
        type: RESTART 
    }
};

export const resetNumpad = () => {
    return { 
        type: RESET_NUMPAD 
    }
};

export const setMemory = payload => {
    return { 
        type: SET_MEMORY, payload
    }
};

// fonctions utiles
export const shuffle = array => {
     array.sort(() => Math.random() - .5);

     return array;
}

export const MAX_MULTIPLICATIONS = 2 ;

export const multiplications = () => {
    let propositions = [];
    for(let i = 1; i < MAX_MULTIPLICATIONS + 1; i++){
        for(let j = 1; j < MAX_MULTIPLICATIONS + 1; j++){
            propositions.push({num1 : i, num2 : j});
        }
    }

    return shuffle(propositions);
};