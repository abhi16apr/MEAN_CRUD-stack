class DbConection {

    constructor(){
    this.user = "root";
    this.PASSWORD = "admin";
    this.Db = "world";
    this.host = "localhost"

    }

    getUserName(){
        return this.user
    }

    getPassword(){
        return this.PASSWORD
    }

    getHostName() {
        return this.host
    }

    getDataBaseName() {
        return this.Db
    }
}

module.exports=DbConection;