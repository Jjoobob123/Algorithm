function solution(cipher, code) {
  let arr = [...cipher]
  
  let answer = arr.reduce((acc,cur,i) => {
 return (i + 1)%code === 0 ? acc + cur : acc + ''},'')

  console.log(answer)
  return answer

}