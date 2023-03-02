function solution(people, limit) {
    // 무게 제한 100, 사람 최대 2명
    let answer = 0
    people.sort((a,b) => a - b)
    let lt = 0
    let rt = people.length - 1
    
      while (lt < rt) {
        
    if (people[lt] + people[rt] > limit) rt--;
    else {
      rt--;
      lt++;
      // console.log(rt, lt)
    }
    answer++;
        // console.log(answer)
  }
  if (lt === rt) answer++;
  return answer;
}