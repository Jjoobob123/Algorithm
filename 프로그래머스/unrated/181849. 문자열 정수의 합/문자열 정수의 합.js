function solution(num_str) {
  let num = 0
  let arr = [...num_str]
  const result = arr.map((a,i) => {
    
    return num += Number(a)
  })
  return num
  
  
}