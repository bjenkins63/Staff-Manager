const Employee = require("./lib/Employee");

class Manager extends Employee {

    constructor(office) {
        super(name, employeeID, email)
        this.officeNumber = office;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOffice() {
        return this.office;
    }


}

module.exports = Manager;