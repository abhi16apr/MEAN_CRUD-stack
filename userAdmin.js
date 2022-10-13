class userAdmin {
    constructor(userId, name, activeForm, role, status) {
        this.userId = userId;
        this.name = name;
        this.activeForm = activeForm
        this.role = role;
        this.status = status;
    }
}

module.exports = userAdmin;