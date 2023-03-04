const employee = require('../lib/Intern');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a string and 2 numbers", () => {
            const obj = new Employee();
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);
        });
    });
    describe("should return number when created", () => {
        const name = "Ted";
        const id = 42;
        const email = "ted@email.com";
        const school = "uni"

        const obj = new Employee(name, id, email, school);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        expect(obj.school).toEqual(school);
    });
});