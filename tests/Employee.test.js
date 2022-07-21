const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName", () => {
        it("should prompt user to enter employee's name", () => {
            const Kim = new Employee('Kimberly', '1', 'kimberlyhoward529@gmail.com')

            expect(Kim.name).toEqual('Kimberly');
        });
    });
});

describe("Employee", () => {
    describe("getId", () => {
        it("should prompt user to enter employee's ID number", () => {
            const Kim = new Employee('Kimberly', '1', 'kimberlyhoward529@gmail.com');

            expect(Kim.id).toEqual('1');
        });
    });
});

describe("Employee", () => {
    describe("getEmail", () => {
        it("should prompt user to enter employee's email.", () => {
            const Kim = new Employee('Kimberly', '1', 'kimberlyhoward529@gmail.com');

            expect(Kim.email).toEqual('kimberlyhoward529@gmail.com');
        });
    });
});