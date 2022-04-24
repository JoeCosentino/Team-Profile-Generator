const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates a manager object', () => {
    const engineer = new Engineer("Joey", 2, "test@test.com", 'githubuser');

    expect(engineer.gitHubUsername).toEqual(expect.any(String));
});