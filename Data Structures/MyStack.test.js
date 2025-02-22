const assert = require("assert");
const Stack = require("./MyStack");

test('Stack should be empty initially', () => {
    const stack = new Stack();
    assert.strictEqual(stack.isEmpty(), true, "Stack should be empty initially");
    assert.strictEqual(stack.size(), 0, "Stack size should be 0 initially");
});

test('Adding elements to the stack', () => {
    const stack = new Stack();
    stack.push(10);
    assert.strictEqual(stack.isEmpty(), false, "Stack should not be empty after pushing an element");
    assert.strictEqual(stack.peek(), 10, "Top element should be 10");
    assert.strictEqual(stack.size(), 1, "Stack size should be 1 after one push");
});

test('Pushing and popping elements', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    assert.strictEqual(stack.size(), 2, "Stack size should be 2 after two pushes");

    assert.strictEqual(stack.peek(), 20, "Top element should be 20 after pushing 20");
    assert.strictEqual(stack.contains(10), true, "Stack should contain 10");
    assert.strictEqual(stack.contains(30), false, "Stack should not contain 30");

    assert.strictEqual(stack.pop(), 20, "Popped element should be 20");
    assert.strictEqual(stack.peek(), 10, "Top element should be 10 after popping 20");

    stack.pop();
    assert.strictEqual(stack.isEmpty(), true, "Stack should be empty after popping all elements");
    assert.strictEqual(stack.size(), 0, "Stack size should be 0 after popping everything");
});

test('Popping from an empty stack', () => {
    const stack = new Stack();
    assert.strictEqual(stack.pop(), null, "Popping from an empty stack should return null");
});

test('Peeking an empty stack', () => {
    const stack = new Stack();
    assert.strictEqual(stack.peek(), null, "Peeking an empty stack should return null");
});

test('Checking if stack contains an element', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(15);
    stack.push(25);

    assert.strictEqual(stack.contains(15), true, "Stack should contain 15");
    assert.strictEqual(stack.contains(100), false, "Stack should not contain 100");
});