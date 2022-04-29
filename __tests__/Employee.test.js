const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee(Manager, Engineer, Intern);

    expect(Manager).toEqual(expect.any(Object));
    expect(Engineer).toEqual(expect.any(Object));
    expect(Intern).toEqual(expect.any(Object));
});

let Manager = {
    name: 'Steve Rogers',
    employeeID: '1',
    email: 'captainamerica@avengers.com',
    officeNumber: '123'
}

let Engineer = {
    name: 'Tony Stark',
    employeeID: '2',
    email: 'ironman@avengers.com',
    github: 'IronmanCodes'
}

let Intern = {
    name: 'Peter Parker',
    employeeID: '3',
    email: 'spidey@avengers.com',
    school: 'NYU'
}