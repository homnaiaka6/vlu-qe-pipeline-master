function login(username, password) {
    // Check valid admin login
    return username === "admin" && password === "999";
}

module.exports = login;
