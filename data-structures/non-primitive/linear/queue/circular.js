class CircularQueue {
  /**
  * Creates a queue.
  * @param {number} size
  */
  constructor(size) {
    this.data = [];
    this.size = size;
    this.head = -1;
    this.tail = -1;
  }

  /**
  * @param {number} index
  * @return {number}
  */
  #getNextElementIndex(index) {
    return (index + 1) % this.size;
  }

  /**
  * @param {number} value
  * @return {boolean}
  */
  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = this.#getNextElementIndex(this.tail);
    this.data[this.tail] = value;
    return true;
  }

  /**
  * @return {boolean}
  */
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true
    }
    this.head = this.#getNextElementIndex(this.head);
    return true
  };

  /**
  * @return {number}
  */
  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[this.head];
  };

  /**
  * @return {number}
  */
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[this.tail];
  };

  /**
  * @return {boolean}
  */
  isEmpty() {
    return this.head === -1;
  };

  /**
  * @return {boolean}
  */
  isFull() {
    return this.#getNextElementIndex(this.tail) === this.head;
  };
};
