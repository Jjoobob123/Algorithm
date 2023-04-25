function solution(price, money, count) {
  let aaa = 0  
  for(let i = 1; i<= count; i++){
    aaa += price * i  
  }
  
  return money > aaa ? 0 : Math.abs(aaa - money)
}