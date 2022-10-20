// Your code here
const chai = require('chai')
const expect = chai.expect
const reverseString = require("../problems/reverse-string")

describe("reverseString", () => {
    it("should reverse a string", () => {
        const string1 = reverseString("fun");

        const expectedstring = "nuf"

        expect(string1).to.equal(expectedstring);


    });

    it("should throw an error when passed a non-string value", () => {

        expect(() => reverseString(10)).to.throw(TypeError);
    })

});