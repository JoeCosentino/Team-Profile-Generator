const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Joey", 3, "test@test.com", 'githubuser');

    expect(intern.gitHubUsername).toEqual(expect.any(String));
});