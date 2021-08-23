//Find majority element(Majority element is that element which exist in array more than its size/2)

//ex--[2,3,4,3,3]//here array size=5  and 3 is our majority element because 3 exist moren than its array's size/2

//1.Using Morre's Voting Algo
//--First find majority candidaate
//Then verify for isMajority or not


/Logic 
//1.Check solution exist |
	//counter>0        |
		
//if(candidate===element	counter++
  // else
  // counter--
//if counter===0  update candidate =>element
   
//2.   then check for if that candidate is majority or not with complete traversal count>n/2


let arr = [2,3,4,3,3]
let size = arr.length;
let count = 1;
let majority_index = 0;

let candidate = findMajority();
let isMajority = checkIsMajority();

if(isMajority){
console.log("majority element=",candidate)
}else {
console.log("No majority element=")
}

// This function will find candidate for majority
function findMajority(){
for(let i=0;i<arr.length-1;i++){
if(arr[majority_index]==arr[i]){
count++;

}
else {
count--
}
if(count ===0){
majority_index = i;
count = 1;
}
}
return arr[majority_index];
}
// this function will check for is majority or not 

function checkIsMajority(){
let count =0;
	for(let i=0;i<=arr.length-1;i++){
  if(arr[i]===candidate)
  count++;
  }
  if(count>size/2){
  return true;
  }else{
  return false;
  }
}
