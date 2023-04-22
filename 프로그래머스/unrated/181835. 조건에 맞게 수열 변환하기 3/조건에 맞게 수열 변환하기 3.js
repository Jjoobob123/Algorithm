function solution(arr, k) {
  
  const aaa = arr.map((a) => {
    if(k % 2 === 0){
      return  a + k 
    }else{
      return  a * k
    }
  })
  return aaa
}