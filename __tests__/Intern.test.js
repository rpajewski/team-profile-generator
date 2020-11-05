const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    let name = 'Ricky';
    let id = '12345';
    let email = 'testemail@gmail.com';
    let school = 'bootcamp spot';
    const intern = new Intern(name, id, email, school);

    expect(intern.school).toBe(school);
});

test('get interns school', () => {
    const intern = new Intern('Ricky');

    expect(intern.getSchool()).toBe(intern.school);
});

test('check intern role', () => {
    const intern = new Intern('Ricky');

    expect(intern.getRole()).toBe('Intern');
});