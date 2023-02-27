function solution(n, k) {
    // 10분 먹으면 음료하나 서비스
    // 양꼬치 1인분 12000 / 음료수 2000
    // n = 양꼬치  ,  k = 음료수 
    
    let sheep = 12000 * n 
    let drink = 2000 * k
    // console.log(sheep,drink)
for(let i = 1; i <= n; i++){
  for(let j = 1 ; j <= n; j++){
    if(i === 10*j){
      sheep -= 2000
    }
  }
}
  return sheep + drink
    
}