class Stack {
  /**
  * Creates a queue.
  * @param {array} [elements]
  */
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : [];
  }

  /**
  * Adds an element to the back of the queue.
  * @public
  * @param {number|string|object} element
  */
  push(element) {
    return this._elements.push(element);
  }

  /**
  * Dequeues the front element in the queue.
  * @public
  * @returns {number|string|object}
  */
  pop() {
    return this._elements.pop();
  }
}
