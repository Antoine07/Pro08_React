const { shoppingList } = require('../shopping');

describe("test Shopping", () => {
  let total, amount, tags;

  // avant chaque test
  beforeEach(() => {
    total = 0;
    amount = 0;
    tags = [];
  });

  test('Test total by product', () => {

    for (let p of shoppingList) {
      if (p['price'] != undefined && p['count'] != undefined && p['total'] != undefined) {
        total = p['price'] * p['count'];
        expect(total).toEqual(Number(p['total']));
      }
    }
  });

  test('Test total is not good', () => {
    for (let p of shoppingList) {
      if (p['total'] != undefined) { total += Number(p['total']); }
    }
    amount = shoppingList.pop().amount || undefined;
    if (amount != undefined) amount = Number(amount);

    expect(amount).not.toEqual(total);

  });


  // 3
  test('Test pattern tags ', () => {
    for (let p of shoppingList) {
      if (p['tags'] != undefined && Array.isArray(p['tags'])) {
        // new Set permet de ne pas avoir de doublon mais on aurit pu directement passer p['tags'] le tableau lui-même
        expect(new Set(p['tags'])).toContain('love');
      }
    }
  });

  // 4
  test('Test pattern tags no war ', () => {
    for (let p of shoppingList) {
      if (p['tags'] != undefined && Array.isArray(p['tags'])) {
        expect(new Set(p['tags'])).not.toContain('war');
      }
    }
  });

});