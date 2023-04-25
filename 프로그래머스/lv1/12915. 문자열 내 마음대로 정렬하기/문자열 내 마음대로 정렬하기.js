function solution(strings, n) {
  // strings -> ["sun", "bed", "car"] / n -> 1
  // sort() 메서드를 이용해 각 문자열의 인덱스가 1인 문자를 비교해 정렬한다.
  strings.sort((a, b) => {
    // ex) a - "sun" / b - "bed"
    // a[1] = "u" / b[1] - "e"
    // "u" 가 "e" 보다 클 경우 뒤로 보낸다.
    if (a[n] > b[n]) {
      return 1;

      // "u" 가 "e" 보다 작을 경우 앞으로 보낸다.
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      // 주어진 문자가 같을 경우
      // 문자열을 비교해 더 큰 문자열을 뒤로 보낸다.
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  // 정렬된 값을 반환한다.
  return strings;
}