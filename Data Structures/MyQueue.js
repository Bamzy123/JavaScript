class Queue {
    constructor() {
        this.storage = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(value) {
        this.storage[this.rearIndex] = value;
        this.rearIndex++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removedElement = this.storage[this.frontIndex];
        delete this.storage[this.frontIndex];
        this.frontIndex++;
        return removedElement;
    }

    peek() {
        return this.isEmpty() ? null : this.storage[this.frontIndex];
    }

    isEmpty() {
        return this.rearIndex === this.frontIndex;
    }

    size() {
        return this.rearIndex - this.frontIndex;
    }

    contains(value) {
        for (let index = this.frontIndex; index < this.rearIndex; index++) {
            if (this.storage[index] === value) return true;
        }
        return false;
    }
}

module.exports = Queue;