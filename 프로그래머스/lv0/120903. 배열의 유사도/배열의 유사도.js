function solution(s1, s2) {
    const count = s1.filter((a,i) => s2.includes(a)).length
  return count
}