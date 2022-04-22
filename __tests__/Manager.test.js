const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Joey');

    expect(manager.name).toBe('Joey');
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.employeeId).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

// expect(potion.name).toEqual(expect.any(String));



// test('creates an enemy object', () => {
//     const enemy = new Enemy('goblin', 'sword');

//     expect(enemy.name).toBe('goblin');
//     expect(enemy.weapon).toBe('sword');
//     expect(enemy.health).toEqual(expect.any(Number));
//     expect(enemy.strength).toEqual(expect.any(Number));
//     expect(enemy.agility).toEqual(expect.any(Number));
//     expect(enemy.potion).toEqual(expect.any(Object));
// });