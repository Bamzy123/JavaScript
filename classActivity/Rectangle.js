const Shape = require("./Shape");

class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle", "Circle")
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    isSquare() {
        return this.width === this.height;
    }
}

let rect1 = new Rectangle(10, 20);
console.log(rect1.getArea());
console.log(rect1.isSquare());

const rect2 = new Rectangle(15, 15);
console.log(rect2.getArea());
console.log(rect2.isSquare());