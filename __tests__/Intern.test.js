const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 3 string and a number", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);
        });
        it("should return number when created", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.name).toEqual("Ted");
            expect(obj.id).toEqual(42);
            expect(obj.email).toEqual("ted@email.com");
            expect(obj.school).toEqual("uni");
        });
        it("should return a object of Intern KeyValuePair", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.getRole()).toEqual({
                name: "Ted",
                id: 42,
                email: "ted@email.com",
                school: "uni"
            });
        });
        it("should return a object of Intern.name 'Ted'", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.getName()).toEqual("Ted");
        });
        it("should return a object of Intern.id '42'", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.getId()).toEqual(42);
        });
        it("should return a object of Intern.email 'ted@email.com'", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.getEmail()).toEqual("ted@email.com");
        });
        it("should return a object of Intern.email 'ted@email.com'", () => {
            const obj = new Intern("Ted", 42, "ted@email.com", "uni");
            expect(obj.getSchool()).toEqual("uni");
        });
    });
        
});