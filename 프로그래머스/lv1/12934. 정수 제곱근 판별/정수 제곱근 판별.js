function solution(n) {
    // 제곱근
    // 제곱의 기준이 되는 숫자
    // 2 * 2 === 4, 2 는 4의 제곱근
    let answer = -1;
    
    // i * i === n, i 는 n의 제곱근
    for(let i = 1; i * i <= n; i++){
        // 11 * 11 === 121 , 11은 121의 제곱근
        // console.log(i, i*i)
        if(i*i === n ){
            // console.log(i,n)
            // answer = i + 1;
            // return answer * answer 
            // return (i+1) * (i+1)
            // 거듭제곱 연산자 활용도 가능
            return (i + 1)**2
        }
    }
    // 제곱근을 찾지 못한 경우
    return answer
}