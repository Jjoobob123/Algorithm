function solution(id_list, report, k) {
  // const a = id_list.join(",")  
  // const b = report.join(",")
  //   console.log(a,'@@@@',b)
  const reporter = {} // 신고한 사람이 대상으로 삼은 사람이 누구인지
  const reportedList = {} // 신고 당한 사람의 누적 신고량 
  answer = [];
  // console.log(report)
  report = [...new Set(report)]
  // console.log(report)
  
  
  for(let i = 0; i < report.length; i++){
    const info = report[i].split(' ')
    
    if(reporter[info[0]] === undefined){
      reporter[info[0]] = [];
    }
    if(reportedList[info[1]] === undefined){
      reportedList[info[1]] = 0;
    }
    // 중복 신고 제거
    // 같은 유저에 대한 신고 이력이있는지 체크 
    // if(reporter[info[0]].includes(info[1])===false){
      reporter[info[0]].push(info[1])
      reportedList[info[1]]++
    // }
  }
  
  for(let i =0 ; i< id_list.length; i++){
    const arr = reporter[id_list[i]] || []
    answer[i] = 0
    
    for(let j = 0;j < arr.length; j++ ){
      // console.log(arr[j],reportedList[arr[j]])
      if(reportedList[arr[j]] >= k){
        answer[i]++
      }
    }
  }
  
  return answer
  // console.log(reporter,reportedList)
}

solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2)

// solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3)