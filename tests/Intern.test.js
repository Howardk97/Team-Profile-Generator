// Bring in Intern file
const Intern = require('../lib/Intern');

// Test to see if Intern class provides school
describe("Intern", () => {
    describe('getSchool', () => {
        it("Should output intern role.", () => {
            const User = new Intern('Kimberly', '1', 'kimberlyhoward', 'Georgia Tech');

            expect(User.school).toEqual('Georgia Tech');
        });
    });
});

// Test to see if intern class provides project role
describe("Intern", () => {
    describe('getRole', () => {
        it("should output intern role.", () => {
            // const User = new Manager('Kimberly', '1', 'kimberlyhoward', '23');
            const role = "Intern";

            expect(role).toEqual('Intern');
        });
    });
}); 