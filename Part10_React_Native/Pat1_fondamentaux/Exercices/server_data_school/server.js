const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json({ limit: "1mb" }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

const students = new Map([
    [1, { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] }],
    [2, { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] }],
    [3, { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] }],
    [4, { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] }],
    [5, { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] }],
]);

const lessons = new Map([
    [1, { id: 1, title: "React" }],
    [2, { id: 2, title: "React Native" }],
    [3, { id: 3, title: "MongoDB" }],
]);

app.get('/students', (req, res) => {

    if (students.size > 0) {
        res.json(Array.from(students.values()));

        return;
    }

    res.status(404).send('Sorry cant find that!');
});

app.get('/student/:id', (req, res) => {

    const { id } = parseInt(req.params);

    if (students.has(id)) {

        res.json(students.get(id));

        return;
    }

    res.status(404).send('Sorry cant find that!');
});

app.get('/lessons', (req, res) => {
    if (lessons.size > 0) {
        res.json(Array.from(lessons.values()));

        return;
    }

    res.status(404).send('Sorry cant find that!');
});

app.put('/student/:id', (req, res) => {
    const student = req.body;

    const { id } = student;

    if (students.has(id)) {

        students.set(id, student)

        res.json({
            status: "success"
        });

        console.log(students);

        return;
    }

    res.status(404).send('Sorry cant find that!');
});

app.post('/student/reset', (req, res) => {
    const reset = req.body;

    if (reset) {
        let student;
        students.forEach((v, k, map) => {
            student = map.get(k);
            student.attendance = 0;

            map.set(k, student);
        })

        res.json({
            status: "success"
        });

        return;
    }

    res.status(404).send('Sorry cant find that!');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));