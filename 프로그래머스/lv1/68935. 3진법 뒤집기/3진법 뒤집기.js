function solution(n) {
    n = n.toString(3)
         .split("") //3진법으로 변환후 배열로 만들어준다.
         .reverse() //reverse함수는 배열 함수기 떄문에 배열로 변환해준다.
         .join("") //다시 문자열 형태로 바꿔주기 위해 join 함수 써준다.
    
    return parseInt(n,3)
}