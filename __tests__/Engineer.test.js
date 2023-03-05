const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing 3 strings and 1 numbers", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", 'username');
            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('github' in obj).toEqual(true);
        });
        it("should return number when created", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", 'username');
            expect(obj.name).toEqual("Ted");
            expect(obj.id).toEqual(42);
            expect(obj.email).toEqual("ted@email.com");
            expect(obj.github).toEqual('username');
        });
        it("should return a object of Engineer KeyValuePair", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", "username");
            expect(obj.getRole()).toEqual({
                name: "Ted",
                id: 42,
                email: "ted@email.com",
                github: "username"
            });
        });
        it("should return a object of Engineer KeyValuePair", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", "username");
            expect(obj.getName()).toEqual("Ted");
        });
        it("should return a object of Engineer KeyValuePair", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", "username");
            expect(obj.getId()).toEqual(42);
        });
        it("should return a object of Engineer KeyValuePair", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", "username");
            expect(obj.getEmail()).toEqual("ted@email.com");
        });
        it("should return a object of Engineer KeyValuePair", () => {
            const obj = new Engineer("Ted", 42, "ted@email.com", "username");
            expect(obj.getGithub()).toEqual("username");
        });
    });      
});