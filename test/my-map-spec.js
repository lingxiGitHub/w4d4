// Your code here
const chai = require('chai')
const expect = chai.expect
const spies = require("chai-spies")
chai.use(spies)

const myMap = require("../problems/my-map")

describe("myMap()", () => {
    let inputArray;

    beforeEach(() => {
        inputArray = [1, 2, 3]
    })


    it("should return a new array", () => {
        expect(myMap(inputArray, () => { })).to.be.an.instanceOf(Array)
    })

    it("should return a new array with the same element", () => {
        const expectedArray = [2, 3, 4]
        expect(myMap(inputArray, element => element + 1)).to.be.eql(expectedArray)
    })

    it("should not call the built-in map", () => {
        const spy = chai.spy.on(inputArray, "map")
        myMap(inputArray, element => element + 1)
        expect(spy).to.not.have.been.called()
    })

    it("should call the callback to each element of the array", () => {
        const callback = element => element + 1;
        const callbackspy = chai.spy(callback)
        myMap(inputArray, callbackspy)
        expect(callbackspy).to.have.been.called.exactly(3)
    })
})