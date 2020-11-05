const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    let name = 'Ricky';
    let id = 12345;
    let email = 'test@gmail.com';
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
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