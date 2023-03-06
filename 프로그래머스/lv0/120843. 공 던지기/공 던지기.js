function solution(numbers, k) {    
  // 첫번째 공 갖고 있는 사람
  let aaa = 1
  
  // 마지막 공을 던진 사람을 찾아주기 위해 k-1 반복하고 다음 사람은 건너뛰도록 +2 해준다.
  for(let i = 0 ; i < k-1; i++){
    aaa += 2
    if(aaa > numbers.length ){
      aaa -= numbers.length
    }
  }
  return aaa
}