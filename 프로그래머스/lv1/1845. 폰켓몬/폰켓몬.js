function solution(nums) {
    const answer = [];
    
    for(let i = 0; i < nums.length; i++){
        if( !answer.includes(nums[i])  && answer.length !== (nums.length/2)){
            answer.push(nums[i])    
        }
        
    }
    return answer.length
    
}