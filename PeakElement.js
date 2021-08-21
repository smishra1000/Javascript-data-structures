//Find peak element in array
//peak element = element which is greater with its neighbours

//ex---45 is greater its left and right elements;

//extreme left and extreme right also be a peak element if its left and right will be less than.

//ex--20 is also a peak element because it's greater its left element


// logic of o(logn) using binary search concept


let arr = [10,23,45,2,20]

let left = 0;
let right = arr.length-1;
let mid;
while(left<right){
mid = left+right/2;

if(arr[mid]<arr[mid+1]){
left = mid+1;
}
else{
right = mid
}
}

console.log(arr[left]);
