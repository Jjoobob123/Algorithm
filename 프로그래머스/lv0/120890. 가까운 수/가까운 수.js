function solution(array, n) {
    // n과 가장 가까운 수를 리턴해라
    // 만약 n과 가장 가까운 수가 여러개라면 숫자가 낮은 것을 리턴해줘라.
     return array.filter(a => Math.abs(a-n) === Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b) => a-b)[0]
}