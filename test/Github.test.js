const {expect} = require("chai");

const Api = require('../src/Github-api')

let api;

before( function () {
    api = new Api();
})

describe("Github Tests", function() {
    it("Can get user information by username", async function() {
        const username = "yuliashi";
        const response = await api.getUser(username);
        console.log(response)  

        expect(response).to.have.property("type", "User"); 
        expect(response).to.have.property("id").that.is.a('number')
    })

    it.skip("Can get a list of users", async function() {
        
        const response = await api.getUsers();
        console.log(response) 

        //expect(response.status).to.equal("success")
        expect(response).to.have.property("status", "success");
        expect(response.data).to.be.an("array").that.has.lengthOf(24)
    })

    it.skip("Can update user information by ID", async function() {
        const body = {}
        const response = await api.updateUser(21, body);
        console.log(response)  

        expect(response.data).to.have.property("name", "test")  
        expect(response.data).to.have.property("salary", "123")
        expect(response.data).to.have.property("age", "23")
        expect(response.data).to.have.property("id").that.is.a('number')
    })
})
