function solution(n, arr1, arr2) {
    const answer = []

    for(let i =0; i< arr1.length; i++){
        // undefined 를 막아주기 위해 빈 문자열을 만들어준다.
        answer[i] = '';
        
        // 지도1의 암호를 2진법으로 변환
        const map1 = arr1[i].toString(2).padStart(n,"0")
        // 지도2의 암호를 2진법으로 변환 
        const map2 = arr2[i].toString(2).padStart(n,"0")
        // console.log(map1,map2)
        for(let j =0; j < map1.length; j++){
            // 벽이 되는 경우부터 체크 '#'
            if(map1[j] === '1' || map2[j] ==='1'){
                // 둘 중 하나라도 벽일 때는 전체 지도에서 벽 
                answer[i] += '#'
            } else {
                // 두 개 모두 공백인 경우 ('0'이라면)
                answer[i] += ' '
            }
        }
    }
    return answer
    
}