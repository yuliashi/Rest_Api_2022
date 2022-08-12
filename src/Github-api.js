const request = require("request-promise");

const host = 'https://api.github.com';

class Github {
    constructor() {
        this.request = request.defaults({
            json: true,
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Agent"
            },
        });
    }

    getUser(username) {
        const path = `${host}/users/${username}`;

        return this.request.get({
            url: path            
        });
    }  

    getUsers() {
        const path = `${host}/users/${username}`;

        return this.request.get({
            url:path
        });
    } 
    
    updateUser(userId, body) {
        const path = `${host}/users/${userId}`;

        return this.request.get({
            url:path,
            body
        });
    } 
}

module.exports = Github;
