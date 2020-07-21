const express = require('express');

const app = express();
const port = 3000;

app.use(express.json({ limit: "1mb" }));

const data = {
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
};

app.get('/students', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.students || []);
});

app.get('/lessons', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.lessons || []);
});

app.put('/student/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { name, title } = req.body;

    authors.push(req.body);

    res.json({
        status: 'success',
        name: name,
        title: title
    });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));