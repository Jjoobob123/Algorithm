function solution(num, k) {
  let arr = new String(num)
  let answer = 0
  // console.log(arr)
  

  for(let i = 0 ; i < arr.length; i++){
    // console.log(Number(arr[i]),)
    if(Number(arr[i]) === k){
       return i + 1
    }
    
  }
     if(answer == 0){
       return -1
     }
  // return answer
      
}