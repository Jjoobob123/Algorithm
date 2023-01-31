function solution(absolutes, signs) {
    let answer = 0;
    
    for(let i = 0; i < absolutes.length;i++){
        // console.log(absolutes[i],signs[i])
        if(signs[i] ===true){
            answer += absolutes[i]
        } else {
            // answer += -absolutes[i]
            answer -= absolutes[i]
        }
    }
    console.log(answer)
    return answer
}