function solution(n) {
  let  x = 0
  
  for(let i = 1 ; i <= n; i++){
    if(n % i === 0) x += i
  }
  return x
}