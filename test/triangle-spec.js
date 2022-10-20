// Your code here

const chai = require('chai')
const expect = chai.expect
const { Triangle, Scalene, Isosceles } = require("../problems/triangle")

describe("Triangle", () => {
    let side1 = 3;
    let side2 = 4;
    let side3 = 5;


    beforeEach(() => {
        let triangle1 = new Triangle(side1, side2, side3)

    })

    describe("constructor()", () => {
        it("should return an instance of triangle length", () => {
            expect(triangle1).to.be.an.instanceof(Triangle)

        })

        it("should set side properties", () => {
            expect(triangle1.side1).to.equal(side1);
            expect(triangle1.side2).to.equal(side2);
            expect(triangle1.side3).to.equal(side3)

        })

        describe("getPerimeter()", () => {
            it("should return perimeter", () => {
                expect(triangle1.getPerimeter()).to.equal(12)
            })
        });

        describe("should return true if it is a valid triangle", () => {
            expect(triangle1.hasValidSideLengths()).to.be.true;
        });


    })

})

