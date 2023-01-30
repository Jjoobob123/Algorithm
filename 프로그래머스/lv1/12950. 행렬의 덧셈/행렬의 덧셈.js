function solution(arr1, arr2) {
    const answer = []
    for( let i =0 ; i < arr1.length; i++){
        for( let j = 0 ; j < arr1[i].length; j++){
            // 이중배열을 나란히 해주기 위해 배열안에 숫자열을 뺴오도록 한다.
            // console.log(arr1[i],arr1[i][j],arr2[i],arr2[i][j])
            const sum = arr1[i][j] + arr2[i][j]
            if(answer[i] === undefined){
                answer[i] =[]
            }
            answer[i][j] = sum
            
        }
    }
    // console.log(answer)
    return answer
}