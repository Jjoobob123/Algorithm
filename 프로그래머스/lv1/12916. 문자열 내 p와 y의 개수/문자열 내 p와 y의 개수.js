function solution(s){
    s = s.toLowerCase(); // 문자열 전체를 소문자로 변환
    let p = 0; // p의 개수를 카운트
    let y = 0; // y의 개수를 카운트

    for( let i = 0; i < s.length; i++ ) {
        if( s[i] === "y" ) {
            y++
            
        } else if( s[i] === "p" ) {
            p++
        }
    }
    
    return p === y;
    // p와 y의 개수가 동일하다면 true 값을 리턴
    // p와 y의 개수가 동일하지 않다면 false 값을 리턴
}
