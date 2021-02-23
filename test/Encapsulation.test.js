const student = require('../src/Encapsulation');

test('Tries to use setter method to fix spelling error in student name', () => {
    let c = new student(12345, "Charlee");
    c.setName("Charles");
    expect(c.getName()).toBe("Charles");
});