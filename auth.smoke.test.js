const login = require("./auth");

test("login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});
