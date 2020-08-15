export class Stack<T> {
  constructor(private stack: T[] = []) {}

  get length() {
    return this.stack.length;
  }
  push(value: T) {
    this.stack.push(value);
  }
  pop() {
    this.stack.pop();
  }
  get peek() {
    return this.stack[this.stack.length - 1];
  }
}
