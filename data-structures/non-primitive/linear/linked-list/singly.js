class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head = null;

  add(value) {
    this.head = new LinkedListNode(value, this.head);
  }

  insert(index, value) {
    if (this.head === null) {
      this.head = new LinkedListNode(value, null);
    } else if (index === 0) {
      add(value);
    } else {
      let current = this.head;
      while (current.next !== null && index > 0) {
        current = current.next;
        index = index - 1;
      }

      current.next = new LinkedListNode(value, current.next);
    }
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  length() {
    let result = 0;
    let current = this.head;

    while (current !== null) {
      result = result + 1;
      current = current.next;
    }

    return result;
  }

  remove() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    return value;
  }

  removeAt(index) {
    if (this.head === null) {
      return undefined;
    }

    if (index === 0 || this.head.next === null) {
      return remove();
    }

    let current = this.head;
    while (current.next.next !== null && index > 0) {
      current = current.next;
      index = index - 1;
    }

    const value = current.value;
    current.next = current.next.next;

    return value;
  }
}
