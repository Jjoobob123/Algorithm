function solution(d, budget) {
    const answer = d.sort( (a, b) => a - b )
                    .filter( money => {
                        // 총 예산에서 지원금 차감
                        budget -= money;
                        
                        if( budget >= 0 ) {
                            return money;
                        }
                    })
    return answer.length;
}