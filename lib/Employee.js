class Employee {
    constructor(name, email, employeeId, role) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmployeeId() {
        return this.employeeId;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;