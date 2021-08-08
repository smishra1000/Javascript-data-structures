// -2, -3, 4, -1, -2, 1, 5, -3
//Using sliding window algo

//sub array : 
//-2,-3,4=-1
//-3,4,-1=0
//4,-1,-2=-1
//-1,-2,1=-2
//-2,1,5=4
//1,5,-3=3

/* if you observe for each subarray of k size we are excluding prevoius arra[i] and including array[j] */


//take i,j=0
//k=3 window size(subarray size)

//first take i = 0,j = 0 find window size 
//using j-i+1===k

//then find max from sum and previous max
//
//





function maximum_sum_subarray(array){
  let sum = 0;
  let max = 0;
  let j = 0;
  let i = 0;
  let k = 3;

  while(j<array.length){
		sum = sum+array[j];
    if(j-i+1<k){
    	j++;
    }else if(j-i+1===k){
    	max = Math.max(max,sum)
      sum = sum-array[i];
      i++;
      j++;
    }
  }
  return max;
}
let array = [-2, -3, 4, -1, -2, 1, 5, -3];

console.log(maximum_sum_subarray(array))
