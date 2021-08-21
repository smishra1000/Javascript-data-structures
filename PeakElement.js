//Find peak element in array
//peak element = element which is ngretaer with its neighbours

//ex---45 is greater its left and righxt elements;

//extream left and extreme right also be a peak element is its lefty and right will eb less than.

//ex--20 is also a peak element 


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
