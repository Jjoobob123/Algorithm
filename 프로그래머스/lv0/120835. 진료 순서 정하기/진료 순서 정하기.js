function solution(emergency) {
    // 복사 배열을 내림차순으로 만들어준다.
    const aaa = [...emergency].sort((a,b) => b - a)
    // 빈 배열을 만들어준다.
    let bbb = new Array(emergency.length).fill(0)
    // console.log(aaa,bbb)
    
    // 진 료 순 위
    let count = 1
    
    for(let i = 0; i< emergency.length; i++){
        // 원본 배열을 내림차순한 배열에 인덱스를 찾아준다.
        let index = emergency.indexOf(aaa[i])
        // console.log(index)
        // 찾은 인덱스들을 우선순위로 빈 배열에 넣어준다.
        bbb.splice(index,1,count)
        count ++
        
    }
    return bbb
}