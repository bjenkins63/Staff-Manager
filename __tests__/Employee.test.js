const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("can set a employe name", () => {
    const name = "Rani";
    const employee = new Employee(name);

    expect(employee.name).toBe("Rani"); // scale to compare

});

test("can set employee email", () => {
    const email = "farani@email.com";
    const employee = new Employee("Rani", 1, email);

    expect(employee.getEmail()).toBe("farani@email.com");
})