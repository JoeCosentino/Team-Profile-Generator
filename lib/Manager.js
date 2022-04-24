const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, employeeId, officeNumber) {
        super(name, email, employeeId);
        this.officeNumber = officeNumber;
    }
}



module.exports = Manager;