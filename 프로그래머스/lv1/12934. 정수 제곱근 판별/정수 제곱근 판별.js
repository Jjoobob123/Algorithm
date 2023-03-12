function solution(n){
  // 거듭제곱근 sprt 활용
  let num = 0
  let sqrt = Math.sqrt(n)
  // console.log(sqrt)
  if( !Number.isInteger(sqrt)) {return -1}
  else{
    num = sqrt + 1
  }
  
  return Math.pow(num,2)
  // console.log(num)

  
}