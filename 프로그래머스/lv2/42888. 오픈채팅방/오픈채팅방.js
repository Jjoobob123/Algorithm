function solution(record) {
    record = record.map(el => el.split(' '))
    
    // 유저들의 최종 닉네임 값을 저장
    const user = record.reduce(( acc,cur ) => {
        const [action, uid, nickname] = cur
        if(nickname) acc[ uid ] = nickname;
        return acc
    }, {})
    // console.log(user)
    const answer = record.reduce(( acc,cur ) => {
        const [ action, uid ] = cur;
        if( action !== 'Change' ){
            acc.push(`${user[ uid ]}님이 ` + 
            ( action === "Leave" ? "나갔습니다." : "들어왔습니다.")
                    )
        }
        return acc;
    }, [])
    
    return answer
    
}