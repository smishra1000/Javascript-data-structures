class Stack{
  constructor(){
    this.element = {};
    this.count = 0
  }

  push(val) {
    this.element[this.count] = val;
    this.count++;
  }
  
  pop(){
    if(this.count === 0)
    return undefined;

    this.count--
    var result = this.element[this.count];
    delete this.element[this.count]
    return result;
  }

  size(){
    return this.count;
  }

  peek(){
    return this.element[this.count-1]
  }
}

var stack = new Stack();
stack.push(2);
stack.push(10);
stack.push(7);
stack.push(13);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())
