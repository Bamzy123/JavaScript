class Stack {

    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(value) {
        this.items[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) return null;

        this.count--;
        const poppedValue = this.items[this.count];
        delete this.items[this.count];
        return poppedValue;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    contains(value) {
        for (let index = 0; index < this.count; index++) {
            if (this.items[index] === value) return true;
        }
        return false;
    }
}

module.exports = Stack;