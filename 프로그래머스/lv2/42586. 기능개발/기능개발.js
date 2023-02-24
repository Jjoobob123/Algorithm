function solution(progresses, speeds) {
  let day = 0
  
  const answer = progresses.reduce((acc,cur,i) => {
    const process = Math.ceil((100 - cur) / speeds[i])
    console.log(cur,process)
    
      if(process > day){
          day = process
          acc [ acc.length] = 1
      } else { 
      acc[ acc.length -1]++
      }
      return acc
    
  },[])
  return answer
}