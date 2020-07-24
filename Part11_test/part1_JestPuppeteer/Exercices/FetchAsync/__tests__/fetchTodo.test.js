const { fetchTodo, parity } = require('../fetchTodo');

describe("Fetch todo", () => {

    const user = { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

    test('user test', async () => {
        const data = await fetchTodo(1);
        const json = await data.json();
        // console.log(json);

        expect(json.userId).toBe(user.userId);
        expect(json.title).toBe(user.title);

        expect(user).toEqual(json);
    });
});

describe("Promise parity", () => {

    let numbers = [];

    beforeEach(() => {
        numbers = numbers.concat([2, 11, 7, 9, 10]); // renvoie un tableau mais ne change pas le tableau numbers pas de référence comme avec sort par exemple
    })

    afterEach(() => numbers = []);

    test('Parity test', async  () => {

        for (const number of numbers) {
            if (number % 2 === 0) {
                await expect(parity(number)).rejects.toBe('even');
            }

            if (number % 2 === 1) {
                await expect(parity(number)).resolves.toBe('odd');
            }
        }
    });
});