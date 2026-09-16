const login = require("./auth");

test("valid login", () => {
    expect(login("admin", "123")).toBe(true);
});
