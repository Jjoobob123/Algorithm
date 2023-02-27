function solution(money) {
    let count = Math.floor(money/5500)
    let change = money%5500
    console.log(count,change)
    return [count,change]
}