


// Priority queue [[10,2],[50,4],[20,2],[30,3]]
// element=[20,3]---first index is value 2nd index is priority
class PriorityQueue{
    constructor(){
      this.collection = []
    }
    //For inserting in queue comparing the priority for inserted element with existing queue elements
    enqueue(element){
        //if empty no need to check priority
      if(this.isEmpty()) {
          this.collection.push(element)
      } else {
          let added = false;
          for(let i=0;i<this.collection.length;i++){
              //comparing priority
              if(element[1]<this.collection[i][1]){
                  this.collection.splice(i,0,element)
                  added = true;
                  break;
              }
          }
          //if not inserted then directly insert at last
          if(!added){
            this.collection.push(element)
          }
      }
    }
    // for displaying queue
    print(){
        console.log(this.collection)
    }
    // remove from front 
    dequeue(){
      return this.collection.shift()
    }
    //getting the size of queue
     size(){
      return this.collection.length;
    }
    //to check empty or not
    isEmpty(){
      return (this.collection.length===0)
    }
    // for getting the front value
    front(){
      return this.collection[0];
    }
  }
  
  var myPriQueue = new PriorityQueue();
  myPriQueue.enqueue([2,1]);
  myPriQueue.enqueue([30,2]);
  myPriQueue.enqueue([40,4]);
  myPriQueue.enqueue([27,3]);
  myPriQueue.print();
  console.log(myPriQueue.front());
  console.log(myPriQueue.dequeue());
  console.log(myPriQueue.size());
  console.log(myPriQueue.isEmpty());
  
