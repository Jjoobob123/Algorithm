function solution(s) {
    let answer = "";
    s = s.toLowerCase()
    // mutable => 원본 데이터를 변환시킨다는 뜻.
    // immutable => 원본 데이터가 변환되지 않는다.
    //대부분 통하는 경우 배열은 mutable 문자열은 immutable
    let idx = 0
    for(let i = 0; i < s.length; i++){
        let word = s[i];
        if(s[i] ===" "){
            idx = 0
        }else{
            if(idx === 0){
                word = s[i].toUpperCase()
            }
            idx ++;
        }
        answer += word
        console.log(answer)
    }
    return answer
}