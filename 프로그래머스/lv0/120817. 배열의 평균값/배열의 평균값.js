function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < numbers.length; i++){
        // 배열안에 있는 숫자들을 할당해줘야 하므로 numbers[i]을 쓴다.
        answer += numbers[i]
    }
    // 평균을 구해야하므로 배열길이로 나눠서 평균값을 구해준다.
    return answer/ numbers.length;
}