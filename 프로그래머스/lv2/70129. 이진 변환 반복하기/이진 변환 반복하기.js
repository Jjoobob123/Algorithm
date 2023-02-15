function solution(s) {
    let count = 0; // 변환 횟수
    let remove = 0; // 제거된 0의 개수
    
    while(s !== '1'){
        count++; //변환 횟수 === 반복 횟수 
        // 1. 모든 0을 제거 
        let temp = '';
        for(let i = 0; i< s.length; i++){
            if(s[i] === '0'){
                // 참조해온 요소가 '0'인 경우를 찾는다.
                remove++;
            } else {
                // 문자열 '1'만 들어온다 
                temp += s[i];
            }
        }
        s = temp.length; // 결과가 문자열 '1'이 아니라면 , 다시 반복
        s = s.toString(2); // 결과가 '1' 이라면 반복은 종료 
        
    }
    
    return [ count , remove]
}