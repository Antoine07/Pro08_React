import { INIT_GAME, MAX_JUNIPER, SET_CHOICE, CHECK_CHOICE } from '../constants/actions';
import { possibleDivisors, possibleMultiples, choice_computer, newMap, updateVeryNestedField } from '../actions/actions-types';

const initialState = {
    possibles: new Map([]),
    choices: new Map([]),
    valid: new Map([]),
    computer: '',
    player: '',
    message: '',
    count: 0,
    score_player: 0,
    score_computer: 0,
    reload: true
}

// on vérifie que la source de vérité ne change pas
export default (state = initialState, action = {}) => {
    let choice, choices, player, possibles, computer, valid, count, score_player, score_computer;

    // console.log('source de vérité :', initialState);
    // console.log('state :', state);

    switch (action.type) {

        case 'RELOAD':

            return {
                ...state,
                reload : action.reload
            }

        case SET_CHOICE: {

            return {
                ...state,
                player: action.payload,
                message: '',
            }
        }

        case CHECK_CHOICE: {

            player = parseInt(state.player);

            if ( isNaN(player) || player > MAX_JUNIPER || player <= 0) return {

                ...state,
                message: `Attention cette valeur ${player} n'est pas correcte pour ce jeu.`
            }

            if (state.valid.has(player) === false) {
                return {
                    ...state,
                    message: `Cette valeur est impossible : ${player} ce n'est pas un diviseur ou un multiple possible`,
                    player: ''
                }
            }

            // sinon c'est bon 
            count = state.count;
            score_player = state.score_player;

            count++;
            score_player++;

            choices = newMap(state.choices); // crée une nouvel instance de choice voir actions-types
            choices.set(count, `step ${count} player : ${player}`);

            possibles = newMap(state.possibles); // crée une nouvel instance de choice voir actions-types
            possibles.delete(player);

            // On calcule les valeurs possibles par rapport au choix du player
            valid = new Map([ ...possibleMultiples(player, possibles), ...possibleDivisors(player, possibles)]);

            // le jeu est terminé car computer ne peut plus faire de choix
            if (valid.size === 0)
                return {
                    ...state,
                    message: `Vous avez gagné `,
                    player: '',
                    computer,
                    valid,
                    choices,
                    possibles,
                    count,
                    score_player,
                    score_computer,
                    reload: null
                }

            // Sinon computer peut continuer
            computer = choice_computer(valid); // fonction dans actions-types
            possibles.delete(computer);

            count++;
            score_computer++; // il a trouvé une valeur possible donc il gagne un point
            choices.set(count, `step ${count} computer ${computer}`);

            // on calcule les valeurs possibles 
            valid = new Map([ ...possibleMultiples(computer, possibles), ...possibleDivisors(computer, possibles)]);

            // le jeu est terminé car vous ne pouvez plus faire de choix ... Le player a perdu
            if (valid.size === 0)
                return {
                    ...state,
                    message: `Vous avez perdu `,
                    player: '',
                    computer,
                    valid,
                    choices,
                    possibles,
                    count,
                    score_player,
                    score_computer,
                    reload: null
                }

            // sinon on continue
            return {
                ...state,
                message: `C'est à vous de jouer`,
                player: '',
                computer,
                valid,
                choices,
                possibles,
                count,
                score_player,
                score_computer
            }
        }

        case INIT_GAME:

            possibles = new Map();

            // generate possibles values
            for (const num of Array(MAX_JUNIPER).keys()) {
                possibles.set(num + 1, num + 1);
            }

            computer = Number((Math.random() * MAX_JUNIPER).toFixed(0)); // toFixed retourne une chaîne de caractères
            possibles.delete(computer);

            valid = new Map([...possibleMultiples(computer, possibles), ...possibleDivisors(computer, possibles)]);
            /*

            Pour bien comprendre le merge de deux Map avec le spread operator

            var premier = new Map([
            [1, 'un'],
            [2, 'deux'],
            [3, 'trois'],
            ]);

            var second = new Map([
            [1, 'uno'],
            [2, 'dos']
            ]);

            // On fusionne les deux maps. C'est la "dernière" version
            // de la clé qui l'emporte.
            // L'opérateur de décomposition nous permet principalement ici
            // de convertir une map en un tableau
            var fusion = new Map([...premier, ...second]);

            console.log(fusion.get(1)); // uno
            console.log(fusion.get(2)); // dos
            console.log(fusion.get(3)); // trois

            */
            choices = new Map();
            count = 1,
                choices.set(count, `step ${count} computer ${computer}`);

            return updateVeryNestedField(state, {
                possibles: possibles,
                valid: valid,
                choices: choices,
                computer: computer,
                count: count,
                reload: false
            })

        default:
            return state;
    }
}