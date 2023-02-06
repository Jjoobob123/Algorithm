const answerTable = [
    [1,2,3,4,5], // 5개 패턴
    [2,1,2,3,2,4,2,5], // 8개 패턴
    [3,3,1,1,2,2,4,4,5,5] // 10개 패턴
]

// el = answerTable 안에 있는 배열 
function solution(answers) {
    const scoreList = answerTable.map((el, i)=>{
        const score = answers.reduce((acc,cur,j)=>{
            
            return acc + (el[j%el.length] === cur ? 1 : 0)
        },0)
        return { student : i + 1, score}
    })
    
    // 제일 많이 맞춘 사람을 구하자   
    const biggest = Math.max(...scoreList.map((el) => {
        
        return el.score
    }))
    const answer = scoreList.filter((el) => {
        return el.score === biggest
    }).map((el)=>{
        return el.student
    })
    
    return answer
    
    
}