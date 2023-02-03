function solution(participant, completion) {
    const answer = {};
    
    for(let i = 0; i <participant.length; i++){
        answer [participant[i]] === undefined
            ? answer[ participant[i] ] = 1
            : answer[ participant[i] ]++
    }
    
    for(let i = 0; i < completion.length; i++){
        answer[ completion[i] ]--;
    }
    // 객체 요소들을 순환 할때
    for(let key in answer){
        // console.log(key,answer)
        if(answer[key] ){
            return key
        }
    }
}