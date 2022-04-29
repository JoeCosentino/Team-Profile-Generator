const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Joey", 3, "test@test.com", 'McMaster');

    expect(intern.school).toEqual(expect.any(String));
});