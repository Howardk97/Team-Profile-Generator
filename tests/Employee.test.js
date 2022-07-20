const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should prompt user to enter employee's name", () => {
            const namePrompt = "What is the employee's name?";

            const result = new Employee().getName(this.message);

            expect(result).toEqual(namePrompt);
        });
    });
});