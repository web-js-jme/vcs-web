const { sum , countRadius, palindrome, maxNumberFromArray, addPriceObject, checkIsNull} = require('./scripts1');

test('adds 1 + 2 to equal 3' , () => {
    expect(sum(1,2)).toBe(3);
});

test('adds 0 + 5 to equal 5' , () => {
    expect(sum(0,5)).toBe(5);
});

test('adds -2 + 3 to equal 1' , () => {
    expect(sum(-2,3)).toBe(1);
});

test('counts adius of 2' , () => {
    expect(countRadius(2)).toBe(12.56);
});

test('is palindrom' , () => {
    expect(palindrome('ana')).toBe(true);
});

test('max number from array [2,5,6] is 6' , () => {
    expect(maxNumberFromArray()).toBe(6);
});

test('if price exist, should return test' , () => {
    expect(addPriceObject({a: '123', kiekis: 2})).toBe({
        a: '123',
        kiekis: 2,
        kaina:50
    })
});

test('if price exist, should return test' , () => {
    expect(checkIsNull({}).toBeNull());
});