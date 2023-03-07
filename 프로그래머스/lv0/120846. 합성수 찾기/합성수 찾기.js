function solution(n) {
    const aaa = new Set()
    let count = 0
    for(let i = 1; i <= n ;i ++ ){
        for(let j = 2 ; j < i ; j++){
          console.log(i,j)
          if(i % j === 0)aaa.add(i)
          // console.log(aaa)
        }
    }
      return aaa.size
    
}
