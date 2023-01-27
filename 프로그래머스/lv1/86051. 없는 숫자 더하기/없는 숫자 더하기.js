function solution(numbers) {
    let answer = 0;
    
    for(let  i = 1; i <= 9 ; i++){
        if(numbers.includes(i) === false){
            answer += i
        }
    }
    console.log(answer)
    return answer
}