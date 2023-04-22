function solution(number, n, m) {
  
  let arr = []
  for(let i = 1; i <= number; i++){
    if(number % i === 0){
        arr.push(i)
      }
    }
    if(arr.includes(n) && arr.includes(m)){
      return 1
    }else{
      return 0
    }
  }