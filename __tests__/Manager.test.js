const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    let name = 'Ricky';
    let id = '12345';
    let email = 'testemail@gmail.com';
    let officeNum = 'top floor 101';
    const manager = new Manager(name, id, email, officeNum);

    expect(manager.officeNumber).toBe(officeNum);
});

test('get managers office number', () => {
    const manager = new Manager('Ricky');

    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
});

test('check manager role', () => {
    const manager = new Manager('Ricky');

    expect(manager.getRole()).toBe('Manager');
});