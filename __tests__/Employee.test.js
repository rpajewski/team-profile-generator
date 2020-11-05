const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Ricky');
    employee.id = 12345;
    employee.email = 'testemail@gmail.com';

    expect(employee.name).toBe('Ricky');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Ricky');

    expect(employee.getName()).toBe(employee.name);
});

test('get employee id', () => {
    const employee = new Employee('Ricky');

    expect(employee.getId()).toBe(employee.id);
});

test('get employee email', () => {
    const employee = new Employee('Ricky');

    expect(employee.getEmail()).toBe(employee.email);
});

test('check employee role', () => {
    const employee = new Employee('Ricky');

    expect(employee.getRole()).toBe('Employee');
});