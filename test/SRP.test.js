const srp = require('../src/SRP');

test('adds 2 to 1 and multiplies the sum by 3', () => {
    expect(srp.goodAddAndMultiply(2, 1, 3)).toBe(9);
});
test('adds 2 to 1 and multiplies the sum by 3', () => {
    expect(srp.addAndMultiply(2, 1, 3)).toBe(9);
});