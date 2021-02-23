// const emp = new Employee("rani", 1, "rani@email.com");
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log("name = " + this.name);
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


}

module.exports = Employee;