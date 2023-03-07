const numbering = {
  "[":0,
  "]":1,
  "{":2,
  "}":3,
  "(":4,
  ")":5
}

function solution(s) {
  let answer = 0
  for(let i = 0; i< s.length; i++){
    // 왼쪽으로 한칸씩 밀기
    s = s.slice(1) + s[0];
    const stack = []
    
    for( let j = 0; j < s.length; j++){
        //  열린 괄호인지, 닫힌 괄오인지 판단( 열림:짝수, 닫힘: 홀수)
        if( numbering[ s[j] ] % 2 === 0 ){
          stack.push( numbering[ s[j] ] ) // 숫자로 스택에 추가
          
        } else {
          // 닫힌 괄호라면 stack에 그 짝이 있는지 체크
          if( stack.includes( numbering[ s[j] ] - 1 ) ){
            const last = stack[ stack.length -1 ];
            
            if( last === numbering[ s[j] ] -1 ){
              stack.splice( stack.length -1,1)  
            }
          } else {
            // 본인의 짝이 없다면 잘못된 괄호
            break;
          }
        }
        // 가장 마지막을 체크하면서, 모든 괄호의 짝이 동등하게 맞을 때!
        if( j === s.length -1 ){
            if(stack.length === 0){
              answer ++
            }
        }
      }
    }
  return answer
}

solution("[](){}")