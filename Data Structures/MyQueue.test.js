const assert = require("assert");
const Queue = require("./MyQueue");

test("Queue should be empty initially", () => {
    const queue = new Queue();
    assert.strictEqual(queue.isEmpty(), true, "Queue should be empty at the beginning");
});

test("Enqueue elements into the queue", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    
    assert.strictEqual(queue.isEmpty(), false, "Queue should not be empty after enqueue");
    assert.strictEqual(queue.peek(), 10, "peek element should be 10");
});

test("Dequeue elements from the queue", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    
    assert.strictEqual(queue.dequeue(), 10, "Dequeue should remove and return 10");
    assert.strictEqual(queue.peek(), 20, "peek element should now be 20");
});

test("Queue should be empty after all elements are removed", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    
    queue.dequeue();
    queue.dequeue();
    
    assert.strictEqual(queue.isEmpty(), true, "Queue should be empty after removing all elements");
});

test("Dequeue and peek operations on an empty queue should return null", () => {
    const queue = new Queue();
    
    assert.strictEqual(queue.dequeue(), null, "Dequeue should return null for an empty queue");
    assert.strictEqual(queue.peek(), null, "peek should return null for an empty queue");
});

test("Check queue size", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    
    assert.strictEqual(queue.size(), 3, "Queue size should be 3");
});

test("Check if queue contains an element", () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    
    assert.strictEqual(queue.contains(20), true, "Queue should contain 20");
    assert.strictEqual(queue.contains(50), false, "Queue should not contain 50");
});
