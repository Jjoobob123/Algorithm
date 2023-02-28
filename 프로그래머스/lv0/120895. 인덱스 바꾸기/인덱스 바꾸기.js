function solution(my_string, num1, num2) {
    let arr = [...my_string]
       arr.splice(num1,1,my_string[num2])
       arr.splice(num2,1,my_string[num1])
  return arr.join('')
}

solution("hello",	1	,2)
solution("I love you",	3	,6)