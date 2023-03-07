function solution(num_list, n) {
            // console.log(aaa,num_list)
  let aaa = num_list.length / n
  console.log(aaa)
    //  2차원 배열을 만들어줄 빈 배열을 만들어 준다.
    // let answer = new Array(num_list.length).fill(0)
       let answer = []
    for(let i = 0; i < aaa ; i ++){
        // console.log(num_list.splice(0,n))
      
       answer.push( num_list.splice(0,n) )
    }
  return answer

}