const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    let name = 'Ricky';
    let id = '12345';
    let email = 'testemail@gmail.com';
    let github = 'rpajewski';
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.github).toBe(github);
});

test('get engineer github username', () => {
    const engineer = new Engineer('Ricky');

    expect(engineer.getGithub()).toBe(engineer.github);
});

test('check engineer role', () => {
    const engineer = new Engineer('Ricky');

    expect(engineer.getRole()).toBe('Engineer');
});