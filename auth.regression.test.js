const login = require("./auth");

test("login with incorrect password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("login with incorrect username", () => {
    expect(login("user", "123")).toBe(false);
});

test("login with empty username", () => {
    expect(login("", "123")).toBe(false);
});

test("login with empty password", () => {
    expect(login("admin", "")).toBe(false);
});

test("login with special characters in password", () => {
    expect(login("admin", "@#$%")).toBe(false);
});

test("login with empty username and password", () => {
    expect(login("", "")).toBe(false);
});
