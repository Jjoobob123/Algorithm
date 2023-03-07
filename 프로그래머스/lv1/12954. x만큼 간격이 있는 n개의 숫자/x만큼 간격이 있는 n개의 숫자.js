function solution(x, n) {
    var answer = new Array(n).fill(1)
                .map((num, i)=>{
                    return (i+num) * x
                })
    return answer
    console.log(answer)

    
}