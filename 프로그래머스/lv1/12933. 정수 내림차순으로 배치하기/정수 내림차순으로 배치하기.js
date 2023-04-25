function solution(n) {
    const aaa = String(n).split("").sort((a,b) => b - a).join("")
    return Number(aaa)
}