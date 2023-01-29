class Queue {
  /**
  * Creates a queue.
  * @param {array} [elements]
  */
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
    this._offset = 0;
  }

  /**
  * Adds an element to the back of the queue.
  * @public
  * @param {number|string|object} element
  */
  enqueue(element) {
    this._elements.push(element);
    return true;
  };

  /**
  * Adds an element to the back of the queue.
  * @public
  * @param {number|string|object} element
  */
  push(element) {
    return this.enqueue(element);
  }

  /**
  * Dequeues the front element in the queue.
  * @public
  * @returns {number|string|object}
  */
  dequeue() {
    if (this.isEmpty()) return false;

    const first = this.front();
    this._offset += 1;

    if (this._offset * 2 < this._elements.length) return first;

    this._elements = this._elements.slice(this._offset);
    this._offset = 0;
    return first;
  }

  /**
  * Dequeues the front element in the queue.
  * @public
  * @returns {number|string|object}
  */
  pop() {
    return this.dequeue();
  }

  /**
  * Returns the front element of the queue.
  * @public
  * @returns {number|string|object}
  */
  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this._elements[this._offset];
  }

  /**
  * Returns the back element of the queue.
  * @public
  * @returns {number|string|object}
  */
  back() {
    if (this.isEmpty()) return null;
    return this._elements[this._elements.length - 1];
  }

  /**
  * Returns the number of elements in the queue.
  * @public
  * @returns {number}
  */
  size() {
    return this._elements.length - this._offset;
  }

  /**
  * Checks if the queue is empty.
  * @public
  * @returns {boolean}
  */
  isEmpty() {
    return this.size() === 0;
  }
};
