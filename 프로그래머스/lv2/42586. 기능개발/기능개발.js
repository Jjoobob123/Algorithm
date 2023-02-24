function solution(progresses, speeds) {
    // 개발속도는 다르기 때문에 앞에 있는 기능보다 먼저 개발 될수도 있지만 뒤에 있는 기능은 배포될때 함께 배포된다.
    // 작업의 진도가 적힌 progresses
    // 개발 속도 speeds
    // 각 배포마다 몇개의 기능이 배포될까
    // 배포는 하루에 한번만 하수 있고 하루끝에 이뤄진다고 함 진도율 95퍼 하루에 4% 2틀뒤 배포
    const answer =[]
  let day = 0;
  for(let i = 0; i < progresses.length; i++){
    // 100 완성까찌 몇일이 걸리는지
  const process = Math.ceil((100 - progresses[i]) / speeds[i])
  
  if(day < process){
    day = process
    answer[answer.length ] = 1
    }else if (day >= process){
      answer[answer.length -1]++
    }
  // console.log(day,process,answer)    
  }
  return answer
    
}