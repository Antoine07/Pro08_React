import React, { createContext, useReducer } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes

import * as _ from 'lodash';

// Source de vérité doit être ne doit pas muter
const initialState = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    order: false,
    behaviours: [],
    mention: "",
    student : null // garder en mémoire les changements liés à un étudiant
};

const average = notes => {
    if (notes.length > 0) {

        return Math.floor(10 * notes.reduce((acc, curr) => acc + curr, 0) / notes.length) / 10;
    }

    return null;
}

const selectMention = (behaviours, id) => {
    const student = behaviours.filter(s => s.id === id);
    if (student.filter(s => s.id === id).length > 0) return student[0].mention;

    return "Aucune";
}

const SchoolContext = createContext();

const reducer = (state, action) => {
    let students, student;

    switch (action.type) {

        case 'INCREMENTE_ATTENDANCE':

            // le map JS renvoie un nouveau tableau => permet d'avoir une nouvelle instance d'un tableau

            // Si on veut être puriste et travailler sur une copie propre des students on doit également retourner une copie de chaque étudiant
            // pour ne pas lié les variables, dans ce cas c'est un peu optionnel car on a déjà séparer la source de vérité du state du reducer

            // s doit être copie dans une nouvel instance : let st = { ...s } si vous voulez tout séparer.

            // nouvel instance premier niveau de students 
            students = state.students.map(s => {

                if (s.id === action.id) {
                    s.attendance++;

                    student = s; // variable du state pour garder l'incrémentation
                }

                return s;
            })

            // pour mettre à jour le state vous pouvez faire un diff
            return {
                ...state,
                students,
                student
            };

        case 'DECREMENT_ATTENDANCE':
            // nouvel instance premier niveau de students 
            students = state.students.map(s => {
                if (s.attendance > 0 && s.id === action.id) {

                    s.attendance--;

                    student = s;
                };

                return s;
            })

            return {
                ...state,
                students,
                student
            };

        case 'RESET_ATTENDANCE':

            // nouvel instance premier niveau de students 
            students = state.students.map(s => {
                // la modifier 
                s.attendance = 0;

                // puis la retourner dans notre nouveau tableau
                return s;
            });

            // retourner ici notre newState mis à jour
            return {
                ...state,
                students
            }

        case 'ORDER':
            // on crée une nouvelle instance de students pour que React refasse son render sinon les données ne sont pas rafraichies
            // _.clone méthode de lodash pour faire une copie d'un objet
            students = _.clone(state.students);

            if (action.order)
                students.sort((a, b) => average(a.notes) > average(b.notes) ? - 1 : 0);
            else
                students.sort((a, b) => average(a.notes) < average(b.notes) ? -1 : 0);

            return {
                ...state,
                students: students,
                order: !state.order
            }

        // TODO faire les mentions 
        case 'MENTION':

            const { id, mention } = action.student;
            let behaviours = _.clone(state.behaviours);

            if (behaviours.filter(student => student.id === id).length === 0) {
                behaviours.push({ id: id, mention: mention });
            } else {
                behaviours.map(student => {
                    if (student.id === id) student.mention = mention;

                    return student;
                })
            }

            return {
                ...state,
                mention: action.student.mention,
                behaviours
            }

        default:
            throw new Error("Bad Action Type");
    }
};

// Clone de la source de vérité pour ne pas la faire muter
const copyInitialState = _.clone(initialState);

const SchoolProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, copyInitialState);

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    );
}


export { SchoolContext, SchoolProvider, average, selectMention };