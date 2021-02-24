const Employee = require("./lib/Employee");

class Engineer extends Employee {

    constructor(github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.email;
    }

}

module.exports = Engineer;