import React, { createContext, useReducer, useEffect } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes
import * as _ from 'lodash';

// Source de vérité doit être ne doit pas muter
const initialState = {
    students: [],
    lessons: [],
    order: false,
    behaviours: [],
    mention: "",
    refresh: false
};

const average = notes => {
    if (notes.length > 0) {
        return notes.reduce((acc, curr) => acc + curr, 0).toFixed(1);
    }

    return null;
}


const SchoolContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_DATA':

            return {
                ...state,
                students: action.students,
                lessons: action.lessons,
                refresh: false
            }

        // todo refresh optionnelle
        case 'REFRESH_DATA':

            return {
                ...state,
                refresh: action.refresh
            }

        default:
            throw new Error("Bad Action Type");
    }
};

// copie de l'objet par lodash
const copyIntialState = _.clone(initialState);

const SchoolProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, copyIntialState);

    // permet de récupérer les données sur le serveur express
    useEffect(() => {
        const fetchData = async () => {

            const fetchStudents = await fetch("http://192.168.1.21:3000/students");
            let students = await fetchStudents.json();

            const fetchLessons = await fetch("http://192.168.1.21:3000/lessons");
            let lessons = await fetchLessons.json();

            // simulation d'une attente de 1/2 seconde
            const wait = await new Promise(res => {
                setTimeout(() => {
                    res(true);
                }, 500);
            });

            dispatch({
                type: "LOAD_DATA",
                students: students,
                lessons: lessons
            });
        };

        fetchData();

    }, [state.refresh]); // fait on montage et dès que refresh est modifié dans le state

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    );
}


export { SchoolContext, SchoolProvider, average };