function solution(numbers) {
    //두개의 곲인 최댓값을 구해줘야하니 제일 높은 숫자 두개를 내림차순으로 뽑아줘
    // 그리고 리턴으로 그 두개를 곱해줘
  let array = numbers.sort((a,b) => b - a)
  // console.log(array,array[0],array[1])
  return array[0]*array[1]
}