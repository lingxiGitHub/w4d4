// Your code here

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        return this.side1 + this.side2 > this.side3 || this.side1 + this.side3 > this.side2 || this.side2 + this.side3 > this.side1
    }

    validate() {
        if (this.hasValidSideLengths() === true) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles) {
        let result = []
        for (let triangle of triangles) {
            if (triangle.hasValidSideLengths()) {
                result.push(triangle)
            }
        }
        return result;
    }
}

class Scalene extends Triangle {
    super(side1, side2, side3)

    isValidTriangle = super.validate()

    validate() {
        return side1 !== side2 && side2 !== side3 && side1 !== side3

    }


}

class Isosceles extends Triangle {
    super(side1, side2, side3)

    checkTwosides() {
        return (side1 === side2 && side1 !== side3) || (side2 === side3 && side1 !== side2) || (side1 === side3 && side1 !== side2)
    }
}

module.exports = { Triangle, Scalene, Isosceles }