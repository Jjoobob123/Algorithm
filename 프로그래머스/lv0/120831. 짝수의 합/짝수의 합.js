function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++ ){
        if(i%2 ===0){
        // i로 배열된 값들을 다 할당해준다
            answer += i
        }
        console.log(answer)
    }
        
    return answer;
}