function solution(numbers) {
    const answer = new Set([]);
    
    numbers.forEach((num1,i) =>{
        numbers.slice(i + 1).forEach((num2)=>{
            const sum = num1 + num2;
            answer.add(sum)
        }) 
    })
    return Array.from( answer ).sort((a,b)=> a-b)
}
    
