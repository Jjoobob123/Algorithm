function solution(my_string) {
    let answer = []
    let numbers = '1234567890'
    for(let  i = 0 ; i < my_string.length; i++){
      if(numbers.includes(my_string[i])){
         answer.push(Number(my_string[i]))
        
      }
    }
  console.log(answer)
  return answer.sort()
      
}