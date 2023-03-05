const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing 2 strings 'name, email' and a number 'id'", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        it("should return number when created", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect(obj.name).toEqual("Ted");
            expect(obj.id).toEqual(42);
            expect(obj.email).toEqual("ted@email.com");
        });
        it("should return a object of Employee KeyValuePair", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect(obj.getRole()).toEqual({
                name: "Ted",
                id: 42,
                email: "ted@email.com"
            });
        });
        it("should return a object of Employee.name 'Ted'", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect(obj.getName()).toEqual("Ted");
        });
        it("should return a object of Employee Employee.id '42'", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect(obj.getId()).toEqual(42);
        });
        it("should return a object of Employee.email 'ted@email.com'", () => {
            const obj = new Employee("Ted", 42, "ted@email.com");
            expect(obj.getEmail()).toEqual("ted@email.com");
        });
    });
});