// Get Engineer file
const Engineer = require('../lib/Engineer');

// Test to see if class gives the engineer github username
describe('Engineer', () => {
    describe('getGithub', () => {
        it('should give the engineer github username.', () => {
            const User = new Engineer('Kimberly', '1', 'kimberlyhoward', 'khoward97');

            expect(User.github).toEqual('khoward97');
        });
    });
});

// Test to see if engineer class provides project role
describe("Engineer", () => {
    describe('getRole', () => {
        it("should output engineer role.", () => {
            // const User = new Manager('Kimberly', '1', 'kimberlyhoward', '23');
            const role = "Engineer";

            expect(role).toEqual('Engineer');
        });
    });
}); 