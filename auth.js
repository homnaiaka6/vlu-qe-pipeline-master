function login(username, password) {
    // Check valid admin login
    return username === "admin" && password === "123";
}

module.exports = login;
