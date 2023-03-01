function solution(s) {
  let answer = []
  let arr = s.split('')
  // console.log(arr)
  arr.forEach((item) => {
    // console.log(s.indexOf(item),item)
    if(s.indexOf(item) === s.lastIndexOf(item)){
      answer.push(item)
    }
  })
  return answer.sort().join('')
  console.log(answer)
}