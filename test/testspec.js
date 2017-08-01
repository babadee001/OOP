var app1 = require('../oop.js').HumanBeing;
var app2 = require('../oop.js').Employee;

describe("Human Being", function() {
    var human;
    //beforeEach function is executed before all the test cases
    //I am using it to create an instance of HumanBeing class.

    beforeEach(function() {
        human = new app1();
    });
    it("has 2 eyes", function() {
        expect(human.getEyes()).toEqual(2);
    });
    it("has 2 legs", function() {
        expect(human.getLegs()).toEqual(2);
    });
    it("can eat", function() {
    expect(human.wink("Newman")).toBe("I am winking at Newman");
    });

});

describe("An Employee", function() {
    var employee;
    beforeEach(function() {
        employee = new app2();
    });
    it("has a head ", function() {
        expect(employee.getHead()).toEqual(1);
    });
    it("has 2 legs", function() {
        expect(employee.getLegs()).toEqual(2);
    });

    it("can receive salary", function() {
        expect(employee.receiveRespect("mid-level")).toEqual('Professional');
        expect(employee.receiveRespect("")).toEqual('You dont seem to level up. Consult free code camp.');
    });
    it("is an instance of its parent class HumanBeing", function() {
        expect(employee instanceof app1).toBe(true)
    });

 });