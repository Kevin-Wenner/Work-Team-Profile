const employee = require('../lib/Manager');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a string and 2 numbers", () => {
            const obj = new Employee();
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);
        });
    });
    describe("should return number when created", () => {
        const name = "Ted";
        const id = 42;
        const email = "ted@email.com";
        const officeNumber = 354
        const obj = new Employee(name, id, email, officeNumber);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.officeNumber).toEqual(officeNumber);
    });
});