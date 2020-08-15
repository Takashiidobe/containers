import { SinglyLinkedList, assertEquals } from "../mod.ts";

Deno.test("SinglyLinkedList: prepend", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.prepend(data);
    assertEquals(data, list.head);
  }
});

Deno.test("SinglyLinkedList: append", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.append(data);
    assertEquals(data, list.tail);
  }
});

Deno.test("SinglyLinkedList: popLeft", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.append(data);
  }
  for (let i = 0; i < arr.length; i++) {
    assertEquals(arr[i], list.popLeft());
  }
});

Deno.test("SinglyLinkedList: popRight", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.append(data);
  }
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    assertEquals(arr[i], list.popRight());
  }
});

Deno.test("SinglyLinkedList: toArray", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.append(data);
  }
  assertEquals(arr, list.toArray());
});

Deno.test("SinglyLinkedList: toString", () => {
  const arr = [1, 2, 3, 4, 5];
  const list = new SinglyLinkedList<number>();
  for (const data of arr) {
    list.append(data);
  }
  assertEquals(arr.toString(), list.toString());
});
