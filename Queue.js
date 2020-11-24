/* Simple Queue Data structure Implementation using Javascript */

class Queue{
  constructor(){
    this.collection = [];
  }
  //To insert element in queue
  enqueue(val){
    this.collection.push(val);
  }
  // delete element from queue
  dequeue(){
    return this.collection.shift();
  }
  
  //to get the size or length
   size(){
    return this.collection.length;
  }
  
  //To check queue is empty or not
  isEmpty(){
    return (this.collection.length===0)
  }
  
  // to get the front value
  front(){
    return this.collection[0];
  }
}

var myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(26);
myQueue.enqueue(8);
console.log(myQueue.front());
console.log(myQueue.dequeue());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
