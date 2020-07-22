
export const MAX_JUNIPER = 100;

export const possibleMultiple = (n, possibles = new Map([])) => {

    let multiple = new Map([]);
    let j = 1, num = n;

    while ( num <= MAX_JUNIPER ) {
        num = j * n;
        if ( num <= MAX_JUNIPER  && possibles.has(num) === false) multiple.set(num, num);

        j++;
    }


    return multiple;
}