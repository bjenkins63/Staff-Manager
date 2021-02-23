const Employee = require("./lib/Employee");

class Intern extends Employee {

    constructor(school) {
        super(name, id, email)
        this.school = school;
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

    getSchool() {
        return this.school;
    }


}

module.exports = Intern;