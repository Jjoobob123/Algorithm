const permission = 'zxcvbnmasdfghjklqwertyuiop1234567890-_.'
function solution(new_id) {
    // 1단계: 대문자를 소문자로 치환
    new_id = new_id.toLowerCase()
    
    // 2단계: 소문자,숫자,마이너스,밑줄,마침표를 제외한 모든 문자 제거
    let answer = ''
    for(let i =0; i< new_id.length; i++){
        if(permission.includes(new_id[i])){
            answer += new_id[i]
        }
    }
    // 3단계: 마침표가 두번 이상 연속되는 경우 하나의 마침표로 치환
    while(answer.includes('..')){
        answer = answer.replace('..','.')
    }
    
    // 4단계: 마침표가 처음이나 끝에 위치한다면 제거
    if(answer[0] === '.'){
        answer = answer.slice(1)
    }
    
    const removeLastDot = function(){
        if(answer.at(-1) === '.'){
        answer = answer.slice(0, answer.length - 1 )
        }
    }
    removeLastDot()
    // 5단계: 빈 문자열이라면, 'a'를 대입
    if(answer === ''){
        answer = 'a'
    }
    
    // 6단계: 길이가 16이상이면 ,15의 길이를 만들어준다.
    // 제거 후, 마침표가 끝에 있다면 다시 제거
    if(answer.length >= 16){
        answer = answer.slice(0,15)
        removeLastDot()
    }
    
    // 7단계: 문자열의 길이가 2이하라면, 길이 3이될때까지 마지막 글자를 반복해서 추가
    if(answer.length <= 2){
        answer = answer.padEnd( 3 , answer.at(-1))
    }
    return answer
    
}