function solution(arr) {
    //1. 제일 작은 수 찾기
    const min = Math.min(...arr)
    
    // 2.제일 작은 숫자만 배열에 추가
    const answer = arr.filter((num) =>{
        return num !== min
    })
    // 3
    
    return answer.length === 0 
        ? [-1]  //빈 배열일 경우
        : answer //빈 배열이 아닌 경우 
}