function solution(a, b) {
    let answer = 0;
    
    if(a === b){
        return a;
    }
    //최솟값
    //반복문이 실행될 때 설정되는 초깃값 (a와 b중에서 더 작은 수가 들어옵니다.)
    const start = a > b ? b : a
    // const start = Math.min(a,b)
    
    //최댓값
    //반복문이 종료되는 조건 설정( a와b중에서 더 큰 수가 들어온다.)
    // const end = Math.max(a,b)
    const end = a > b ? a : b
    
    
    for(let i = start; i <= end; i ++ ){
        answer += i
    }
    return answer
}