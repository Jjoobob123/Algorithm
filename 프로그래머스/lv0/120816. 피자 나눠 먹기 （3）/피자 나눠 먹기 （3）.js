function solution(slice, n) {
    // 두조각에서 열조각까지 원하는 조각 수 
    // 원하는 조각수 slice 먹는사람 n 
    // n 이 최소 한 조각을 먹으려면 몇판의 피자를 시켜야 하는지
    return Math.ceil(n/slice)
}