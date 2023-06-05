function solution(s) {
    let answer = []
    let stack = [] // 검사 완료 목록
    
    for(let i=0; i<s.length; i++){
    
    	// 새로운 배열을 만들어 검사하는 방법
        // string.lastIndexOf(value) : value값이 마지막으로 나온 인덱스를 return
        if(stack.includes(s[i])){
        	//검사 완료 목록에 현재 검사하는 str이 있으면 
            answer.push(stack.length - stack.lastIndexOf(s[i]))
            stack.push(s[i])
        }else {
        	// 검사 완료 목록에 연제 검사하는 str이 없으면 
            answer.push(-1)
            stack.push(s[i])
        }
    }
   
    return answer
}