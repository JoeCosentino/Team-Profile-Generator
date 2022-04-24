const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {

    const testValue = 100;
    const manager = new Manager("Joey", 1, "test@test.com", testValue);
    
    expect(manager.officeNumber).toBe(testValue);
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