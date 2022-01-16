/*

Find the leaders in ana array
leader is an element which is greater to all the element to its right


logic--- 
1. store the rigfht most element in leaders array; and inside leader as well because rightmost element will be leader always;
Iterate the array from it right---check if current leader is smaller than its element then update the leader and push element in leaders array;

*/
function findLeaders(a,n) {
let leader = a[n-1];
leaders.push(a[n-1]);
  for(let i=n-1;i>=0;i--){
    if(a[i]>leader) {
      leaders.push(a[i]);
      leader = a[i];
    }
  }
}


let array = [15,18,5,3,6,2];
let leaders = [];
findLeaders(array,6);

console.log("leaders==",leaders)
