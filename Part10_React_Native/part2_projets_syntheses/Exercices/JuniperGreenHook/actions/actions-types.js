
export const MAX_JUNIPER = 100;

// possibles est un tableau dans lequel je vais placer les valeurs que l'on aura déjà choisie 
export const possibleMultiples = (n, possibles = new Map([])) => {

    let multiples = new Map([]);
    let j = 1, num = n;

    while (num <= MAX_JUNIPER) {
        num = j * n;
        if (num <= MAX_JUNIPER && possibles.has(num) === false) multiples.set(num, num);

        j++;
    }

    return multiples;
}

export const possibleDivisors = (n, possibles = new Map([])) => {

    let divisors = new Map([]);
    let d = 2;

    while (d <= n) {
        if (n % d === 0 && possibles.has(d) === false) divisors.set(d, d);

        d++;
    }

    return divisors;
}