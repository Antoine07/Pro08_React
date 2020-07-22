import React, { createContext, useReducer, useEffect, useCallback } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes
import * as _ from 'lodash';

import {
    Platform
} from 'react-native';

// Source de vérité doit être ne doit pas muter
const initialState = {
    students: [],
    lessons: [],
    order: false,
    behaviours: [],
    mention: "",
    refresh: false,
    isLoading: false,
    student: null,
    reset: null
};

const average = notes => {
    if (notes.length > 0) {
        return notes.reduce((acc, curr) => acc + curr, 0).toFixed(1);
    }

    return null;
}


const SchoolContext = createContext();

const reducer = (state, action) => {

    let updateStudent, students;

    switch (action.type) {

        case 'LOAD_DATA':

            action.students.sort(() => Math.random() - .5)

            return {
                ...state,
                students: action.students,
                lessons: action.lessons,
                isLoading: action.isLoading,
                refresh: false,
            }

        case 'LOAD_STUDENT':

            return {
                ...state,
                student: action.student,
                isLoading: false,
            }

        case 'INCREMENTE_ATTENDANCE':

            // map retourne un nouveau tableau
            students = state.students.map(student => {

                if (student.id == action.id) {
                    student.attendance++;
                    updateStudent = student;
                }
                return student;
            })

            console.log(updateStudent)

            return {
                ...state,
                students,
                student: { ...updateStudent }
            };

        case 'DECREMENT_ATTENDANCE':
            students = state.students.map(student => {
                if (student.attendance > 0 && student.id == action.id) {
                    student.attendance--;

                    updateStudent = student;
                }

                return student;
            })

            return {
                ...state,
                students,
                student: { ...updateStudent }
            };

        case 'REFRESH':

            return {
                ...state,
                refresh: true
            }

        case 'LOADING':

            return {
                ...state,
                isLoading: true
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

        case 'RESET':
            return {
                ...state,
                reset : true
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

            const url = Platform.OS === 'web' ? 'http://localhost:3000' : 'http://192.168.1.21:3000';

            dispatch({
                type: "LOADING",
                isLoading: true
            });

            const fetchStudents = await fetch(`${url}/students`);
            let students = await fetchStudents.json();

            const fetchLessons = await fetch(`${url}/lessons`);
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
                lessons: lessons,
                isLoading: false
            });
        };

        fetchData();

    }, [state.refresh]);


    useEffect(() => {

        const fetchUpdateData = async () => {
            const url = Platform.OS === 'web' ? 'http://localhost:3000' : 'http://192.168.1.21:3000';

            const options = {
                method: 'PUT',
                body: JSON.stringify(state.student),
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            }

            const fetchStudent = await fetch(`${url}/student/${state.student.id}`, options);
            let response = await fetchStudent.json();

            const fetchStudents = await fetch(`${url}/students`);
            const students = await fetchStudents.json();

            dispatch({
                type: "LOAD_DATA",
                students: students,
                isLoading: false
            });

        };

        if (state.student !== null) fetchUpdateData();

    }, [state.student]);

    useEffect(() => {

        const fetchReset = async () => {
            const url = Platform.OS === 'web' ? 'http://localhost:3000' : 'http://192.168.1.21:3000';

            const options = {
                method: 'POST',
                body: JSON.stringify({ reset : true }),
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            }

            const fetchStudent = await fetch(`${url}/student/reset`, options);
            let response = await fetchStudent.json();

            const fetchStudents = await fetch(`${url}/students`);
            const students = await fetchStudents.json();

            dispatch({
                type: "LOAD_DATA",
                students: students,
                isLoading: false,
                reset : null
            });

        };

        if (state.reset) fetchReset();

    }, [state.reset])

    return (
        <SchoolContext.Provider value={[state, dispatch]}>
            {children}
        </SchoolContext.Provider>
    );
}

export { SchoolContext, SchoolProvider, average };