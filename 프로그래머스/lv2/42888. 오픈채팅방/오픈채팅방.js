function solution(record) {
    const answer = []
    
    const user = {} // 유저들의 최종 닉네입 값을 저장 
    for( let i = 0; i < record.length; i++){
       const [action, uid, nickname] = record[i].split(' ')
       
       if( nickname ){
           user [ uid ] = nickname;
           
       }
       if(action !== "Change"){
           answer.push({action,uid})
       }
    }
    for(let idx in answer){
        answer[ idx ] = user[ answer[ idx ].uid ] + (
            answer[ idx ].action === 'Enter'
                ? "님이 들어왔습니다."
                : "님이 나갔습니다."
        )
    }
    return answer
}