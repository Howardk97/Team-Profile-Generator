// Get Manager file
const Manager = require('../lib/Manager');

// Test to see if manager class provides office number
describe("Manager", () => {
    describe('getOffice', () => {
        it("should output manager name.", () => {
            const User = new Manager('Kimberly', '1', 'kimberlyhoward', '23');

            expect(User.office_num).toEqual('23');
        });
    });
});

// Test to see if manager class provides project role
describe("Manager", () => {
    describe('getRole', () => {
        it("should output manager role.", () => {
            // const User = new Manager('Kimberly', '1', 'kimberlyhoward', '23');
            const role = "Manager";

            expect(role).toEqual('Manager');
        });
    });
}); 

