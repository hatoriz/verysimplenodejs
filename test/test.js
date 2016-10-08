/**
 * Created by hatoriz on 10/8/2016.
 */
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8899");

describe("Normal Greeting", function(){
    it("should return home page", function(done){
        server
            .get("/")
            .expect("content-type/text", /text/)
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200);
                done();
            });
    });
});