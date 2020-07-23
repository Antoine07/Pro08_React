import { MAX_JUNIPER, INIT_GAME } from '../constants/actions';

// possibles est un tableau dans lequel je vais placer les valeurs que l'on aura déjà choisie 
export const possibleMultiples = (n, possibles = new Map([])) => {

    let multiples = new Map([]);
    let j = 1, num = n;

    while (num <= MAX_JUNIPER) {
        num = j * n;
        if (num <= MAX_JUNIPER && possibles.has(num) === true) multiples.set(num, num);

        j++;
    }

    return multiples;
}

export const possibleDivisors = (n, possibles = new Map([])) => {

    let divisors = new Map([]);
    let d = 2;

    if ( possibles.has(1) === true) divisors.set(1, 1);

    while (d <= n) {
        if (n % d === 0 && possibles.has(d) === true) divisors.set(d, d);

        d++;
    }

    return divisors;
}


export const initGame = () => {

    return {
        type : INIT_GAME
    }
}