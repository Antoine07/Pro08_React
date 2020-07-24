const { priceTTC, priceHT_TTC } = require('../priceTTC');

// Permet de faire un bloque de tests
describe("test du module priceTTC", () => {

    let resultHT_TTC = [];

    // avant chaque test on execute cette fonction
    // pour avoir toujours des variables nettoyées
    beforeEach(() => {
        for (let price of [11, 18, 29, 30, 45, 119]) {
            resultHT_TTC.push({ ht: price, ttc: Math.floor(price * 1.2 * 10) / 10 });
        }
        // console.log(resultHT_TTC)
    });

    // après chaque test on remet à jour les variables utilisées
    afterEach(() => {
        resultHT_TTC = [];

        //console.log(resultHT_TTC)
    });

    test("price HT to TTC", () => {
        expect(priceTTC(100)).toBe(120);
    });

    test("price HT to TTC with array", () => {
        for (let price of resultHT_TTC)
            expect(priceTTC(price.ht)).toBe(price.ttc);
    });

    test("test : priceHT_TTC", () => {
        for (const price of resultHT_TTC) {
            expect(priceHT_TTC(price.ht)).toEqual({
                priceHT: price.ht,
                priceTTC: price.ttc
            });
        }
    });

    test("test excpetion", () => {
        expect(() => priceTTC("Hello World")).toThrow("Price is not a number");
    });

    test("test excpetion", () => {
        expect(() => priceTTC("19")).toThrow("Price is not a number");
    })

});