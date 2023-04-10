function solution(num1, denum1, num2, denum2) {
       // 분자
    let topNum = num1*denum2 + num2*denum1
    // 분모
    let botNum = denum1*denum2
    // 최소 공배수
    let maximum = 0
    // 약분
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    
    return [topNum/maximum, botNum/maximum]
}