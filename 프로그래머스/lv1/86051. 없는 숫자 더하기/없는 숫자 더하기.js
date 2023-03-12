function solution(numbers) {
    const answer = new Array(9).fill(1)
                    .reduce((acc,cur,i)=> {
                        console.log(acc)
                        const num = cur + i;
                        return acc + (numbers.includes(num)
                                     //배열에 존재한다면 0을 더해준다.
                                      ? 0
                                      // 배열에 존재하지 않는다면
                                      : num
                                     )
                    },0)
    return answer
    
}