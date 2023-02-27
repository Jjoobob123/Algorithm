function solution(a, n) {
  let answer = [...a].map((z)=>z.repeat(n)).join('')
  console.log(answer)
    return answer
}