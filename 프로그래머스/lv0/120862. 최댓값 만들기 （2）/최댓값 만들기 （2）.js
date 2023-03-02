function solution(numbers) {
      // 두개를 곱해 최댓값을 구하라
  numbers.sort((a,b) => a - b)
  
  const aaa = numbers[0] * numbers[1]
  const bbb = numbers.at(-1)*numbers.at(-2)
  
  if(aaa > bbb){
    return aaa
  }else{
    return bbb 
  }
  
}