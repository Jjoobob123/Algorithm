function solution(array) {
    let max = Math.max(...array)
    let index = array.indexOf(max)
  
  console.log(max)
  return [max,index]
}