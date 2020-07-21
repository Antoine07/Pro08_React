const express = require('express');
// const cors = require('cors');

const app = express();
const port = 3000;
// app.use(cors());

app.use(express.json({ limit: "1mb" }));

const candidates = [
    { choice_1: "Alan", choice_2: "Juliette", id: 1 },
    { choice_1: "Phi", choice_2: "Bernard", id: 2 },
    { choice_1: "Lisa", choice_2: "Elise", id: 3 },
    { choice_1: "Cecilia", choice_2: "Alice", id: 4 },
];

// get all candidates
app.get('/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));