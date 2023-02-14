function solution(n) {

    
//     let array = [1,1]
//     for(let i = 2; i < n; i++){
//      array.push((array[ i - 1 ] + array [ i - 2 ]) % 1234567) 
//     console.log(array)
//   }
//     return  array[array.length-1] 
    let answer = new Array(2).fill(1)
    for(let i = 2; i < n; i++){
        answer.push((answer[answer.length - 1]+answer[answer.length - 2]) % 1234567)
        
    }
    return answer[answer.length-1]
}