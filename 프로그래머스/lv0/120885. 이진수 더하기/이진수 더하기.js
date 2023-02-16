function solution(bin1, bin2) {
    
  // 이진수를 정수로 변환
  n = parseInt(bin1,2)
  m = parseInt(bin2,2)
  // 변환해서 더한 후 다시 이진수로 변환   
  return (n+m).toString(2)
}
