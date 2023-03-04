function solution(box , n) {
  let count = 0 ;
  let aaa = box.map(x => Math.floor(x  / n))
  return aaa.reduce((a,b) => a * b)
  
  
}