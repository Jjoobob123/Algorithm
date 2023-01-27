function solution(x) {
    //각 자릿수의 합을 저장하는 변수
    let sum = 0;
    
    // 숫자타입의 X 를 문자열 타입으로 변환
    x = String( x )
    
    for(let i = 0; i < x.length; i++){
       // sum += x[i] //여기서 for문을 해주면 sum의 type은 string이 된다.그러므로
        sum += Number(x[i])
    }
    // 조건식으로 리턴 :  나머지값이 없다면 true 있다면 false
    return x % sum === 0;

}