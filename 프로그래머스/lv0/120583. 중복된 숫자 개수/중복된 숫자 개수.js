function solution(array, n) {
    // n 이 중복된 개수 구하기 
  let newArr = []
  for(let i = 0 ;  i < array.length; i ++){
    if(array[i] === n){
      newArr.push(array[i])
    }
  }
  console.log(newArr)
  return newArr.length
  
}