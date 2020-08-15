export class ListNode<T> {
  constructor(
    public value: T,
    public next: ListNode<T> | null = null,
  ) {}
}

export class SinglyLinkedList<T> {
  constructor(
    private _head: ListNode<T> | null = null,
    private _tail: ListNode<T> | null = null,
    private _length: number = 0,
  ) {}

  get head(): T | null {
    return this._head ? this._head.value : null;
  }

  get tail(): T | null {
    return this._tail ? this._tail.value : null;
  }

  get length(): number {
    return this._length;
  }

  prepend(val: T): boolean {
    const newNode = new ListNode<T>(val);

    if (this._head === null) {
      this._head = this._tail = newNode;
    } else {
      this._head.next = this._head;
      this._head = newNode;
    }

    this._length++;
    return true;
  }

  append(val: T): boolean {
    const newNode = new ListNode<T>(val);

    if (this._tail === null) {
      this._head = this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length++;
    return true;
  }

  popLeft(): T {
    if (this._head === null) {
      throw new Error("The list has no items left to pop.");
    }
    const value = this._head.value;
    this._head = this._head.next;
    this._length--;
    return value;
  }

  popRight(): T {
    if (this._tail === null) {
      throw new Error("The list has no items left to pop.");
    }
    if (this._head === this._tail) {
      this._length--;
      let value = this._head.value;
      this._head = this._tail = null;
      return value;
    }
    let slowNode = this._head;
    let fastNode = this._head!.next;
    for (let i = 2; i < this._length; i++) {
      slowNode = slowNode!.next;
      fastNode = fastNode!.next;
    }
    let value = fastNode!.value;
    this._tail = slowNode;
    this._length--;
    return value;
  }

  toArray(): T[] {
    const arr = [];
    const listLength = this._length;
    for (let i = 0; i < listLength; i++) {
      arr.push(this.popLeft());
    }
    return arr;
  }

  toString(): string {
    return this.toArray().toString();
  }
}
