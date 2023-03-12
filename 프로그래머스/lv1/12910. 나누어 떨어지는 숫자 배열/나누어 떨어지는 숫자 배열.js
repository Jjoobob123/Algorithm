function solution(arr, divisor){
    // arr 요소에서 divisor 로 나누어 떨어지는 값을 오름차순으로 정렬
    // 나누어 떨어지는 요소가 없다면 -1 반환
  let answer = []
    let aaa = arr.map(a => {
      if( a % divisor ===  0){
        answer.push(a)
      }
    })
    if(answer[0] === undefined) return [-1]
    return answer.sort((a,b) => a - b)
    // console.log(answer,answer[0])

  
}