let remove = '1234567890'
function solution(my_string) {
  let answer = ''
  for(let i = 0 ; i < my_string.length; i++){
    if(remove.includes(my_string[i])){
      answer += my_string[i]
    }
  }
  let bbb = answer.split('')
  let zzz =bbb.reduce((acc,cur) => {
    return acc + Number(cur)
  },0)
    return zzz
  
  
}