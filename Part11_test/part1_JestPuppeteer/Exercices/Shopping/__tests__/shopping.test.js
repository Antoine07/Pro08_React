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

        expect(total).toEqual( Number(p['total']) );
      }
    }
  });

  // total dans le shopping list
  test('Test total is not good', () => {
    for (let p of shoppingList) {
      if (p['total'] != undefined) { total += Number(p['total']); }
    }

    amount = shoppingList.pop().amount || undefined;
    if (amount != undefined) amount = Number(amount);

    expect(amount).not.toEqual(total); // ce n'est pas le même total
  });
});