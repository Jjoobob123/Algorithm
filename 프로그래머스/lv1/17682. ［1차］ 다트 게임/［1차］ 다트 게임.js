

const bonus = [ "S", "D", "T" ] // 보너스를 체크하기 위한 배열
const option = [ "*", "#" ] // 옵션을 체크하기 위한 배열

function solution(dartResult) {
    const answer = [];
    
    let score = ""; // 점수만 뽑아서 저장하는 변수
    for( let i = 0; i < dartResult.length; i++ ) {
        if( isNaN( dartResult[i] ) === false ) {
            // 숫자 타입으로 변환한 데이터가 NaN 값이 아닌 경우 ( => 숫자인 경우 )
            score += dartResult[i]
        } else {
            score = Number(score)
            // 숫자 타입으로 변환한 데이터가 NaN 값인 경우 ( => 숫자가 아닌 경우 )
            if( bonus.includes( dartResult[i] ) ) {
                if( dartResult[i] === "D" ) {
                    // score = score ** 2 // 2제곱
                    score = Math.pow( score, 2 )
                } else if( dartResult[i] === "T" ) {
                    // score = score ** 3 // 3제곱
                    score = Math.pow( score, 3 )
                }
                answer.push( score );
                score = "";
            } else if( option.includes( dartResult[i] ) ) {
                // 옵션이 있는 경우
                if( dartResult[i] === "#" ) {
                    // 아차상일 경우 : 해당 점수를 마이너스 한다.
                    answer[ answer.length - 1 ] *= -1
                } else {
                    // 스타상일 경우 : 해당 점수에 2를 곱한다.
                    answer[ answer.length - 1 ] *= 2
                    
                    // 현재 게임이 2번째 게임 이상인 경우에만
                    if( answer.length > 1 ) {
                        // 앞에 있는 점수까지 2를 곱한다.
                        answer[ answer.length - 2 ] *= 2
                    }
                }
            }
        }
    }
    
    return answer.reduce(( acc, cur ) => acc + cur)
}
