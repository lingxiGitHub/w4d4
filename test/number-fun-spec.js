// Your code here
const chai = require('chai')
const expect = chai.expect

const {returnsThree, reciprocal } = require("../problems/number-fun")

describe("returnsThree()", () => {
    it("should return three", () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe("reciprocal()", () => {
    context("valid arguments", () => {
        it ("should return the reciprocal", () => {
            expect(reciprocal(4)).to.equal(0.25)
            expect(reciprocal(1)).to.equal(1)
        })
    })

    context("invalid arguments", () => {
        it("should throw an error when a number less than 1 is passed or greater than 10000000 is passed", () => {
            expect(() => reciprocal(0)).to.throw(TypeError)
            expect(() => reciprocal(1000001)).to.throw(TypeError);
        })


    })

})
