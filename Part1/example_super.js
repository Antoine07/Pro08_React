class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
}

class Square extends Rectangle {
    constructor(width) {
        // doit être appelée avant le this
        super(width, width);
        this.name = "square";

    }
}

let s = new Square(1.8);
console.log(s.length, s.width, s.name);