function solution(n) {
  //   // 두개를 곱했을 때 n이 나오는 두개의 수 개수는?
  //   // for 문 두개를 돌려 (a,b)로 해주면 좋을 거 같다.
  //   let count = 0
  //   for(let i = 1; i <= n; i++){
  //     for(let j = 1; j <=n; j++){
  //       if(i*j === n){
  //         count ++
  //       }
  //     }
  //   }
  // return count
  // for문 두개로 푼 결과 런타임초과로 인해 효율성이 좋지 않다.
  // n이 결과값이고 두수의 곲이므로 약수를 배열로 나열해 그 길이를 구하는것도
  // 괜찮을거 같다.
        const result = []
        for(let i = 1; i <= n ; i++){
            if(n%i === 0) result.push(i)
            
        }
    return result.length
}