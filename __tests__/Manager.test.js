const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 2 strings and 2 numbers", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);
        });
        it("should return number when created", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.name).toEqual("Ted");
            expect(obj.id).toEqual(42);
            expect(obj.email).toEqual("ted@email.com");
            expect(obj.officeNumber).toEqual(354);
        });
        it("should return a object of Manager KeyValuePair", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.getRole()).toEqual({
                name: "Ted",
                id: 42,
                email: "ted@email.com",
                officeNumber: 354
            });
        });
        it("should return a object of Manager KeyValuePair", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.getName()).toEqual("Ted");
        });
        it("should return a object of Manager KeyValuePair", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.getId()).toEqual(42);
        });
        it("should return a object of Manager KeyValuePair", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.getEmail()).toEqual("ted@email.com");
        });
        it("should return a object of Manager KeyValuePair", () => {
            const obj = new Manager("Ted", 42, "ted@email.com", 354);
            expect(obj.getOfficeNumber()).toEqual(354);
        });
    });        
});