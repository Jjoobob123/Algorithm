function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    // 즉, 등차는 마지막 값에 등차 값을 더해주고
    return common.pop() + common[1] - common[0];
  } else {
    // 등비는 마지막 값에 나눠서 구한 등비를 곱해주면 된다.
    // 나누셈에 ()를 친 이유는 계산 순서 때문이다.
    return common.pop() * (common[1] / common[0]);
     
  }
    
}