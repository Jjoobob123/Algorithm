function solution(my_string) {
 let answer = [...new Set(my_string)]
  console.log(answer)
  return answer.join('')
}